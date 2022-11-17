import { useState } from "react";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useChat } from "../contexts/ChatContext";

const useSearch = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useAuth();
  const [err, setErr] = useState(false);
  const { dispatch } = useChat();

  const handleKey = (e) => {
    try {
      onSnapshot(collection(db, "users"), (snap) => {
        const result = snap.docs.filter(
          (ele) =>
            ele
              .data()
              .displayName.toLowerCase()
              .includes(e.target.value.toLowerCase()) &&
            ele.data().uid !== currentUser.uid
        );
        setUser(result.map((ele) => ele.data()));
      });
    } catch (error) {
      setErr(true);
    }
  };

  const handleSelect = async (user) => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    const res = await getDoc(doc(db, "chats", combinedId));
    if (!res.exists()) {
      setDoc(doc(db, "chats", combinedId), {
        messages: [],
      });

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [combinedId + ".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userChats", user.uid), {
        [combinedId + ".userInfo"]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
    }

    dispatch({ type: "CHANGE_USER", payload: user });

    setUser(null);
  };

  return {
    err,
    user,
    handleKey,
    handleSelect,
  };
};

export default useSearch;
