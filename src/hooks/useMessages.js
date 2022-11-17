import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useChat } from "../contexts/ChatContext";
import { db } from "../firebase";

export default function useMessages() {
  const [messages, setMessages] = useState([]);
  const { data } = useChat();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });
    return () => {
      unsub();
    };
  }, [data.chatId]);
  return { messages };
}
