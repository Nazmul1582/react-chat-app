import { useContext, createContext, useReducer } from "react";
import { useAuth } from "./AuthContext";
import "../firebase";

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export default function ChatContextProvider({ children }) {
  const { currentUser } = useAuth();
  const INITIAL_STATE = {
    user: {},
    chatId: "null",
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}
