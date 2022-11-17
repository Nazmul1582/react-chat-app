import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";

export default function useChatsHook() {
  const [chats, setChats] = useState({});
  const { currentUser } = useAuth();

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        doc.exists() && setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser && getChats();
  }, [currentUser]);
  return { chats };
}
