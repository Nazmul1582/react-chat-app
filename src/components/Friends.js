import useChatsHook from "../hooks/useChatsHook";
import { useChat } from "../contexts/ChatContext";
import Search from "./Search";
import css from "../styles/Friends.module.css";
import avatar from "../assets/images/avatar.png";

export default function Friends() {
  const { chats } = useChatsHook();
  const { dispatch } = useChat();

  const handleClick = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className={css.friends}>
      <Search />
      <div className={css.chatedUser}>
        {Object.entries(chats)
          ?.sort((a, b) => b[1].date - a[1].date)
          .map((chat) => (
            <div
              className="user"
              key={chat[0]}
              onClick={() => handleClick(chat[1].userInfo)}
            >
              <img
                src={
                  chat[1].userInfo.photoURL ? chat[1].userInfo.photoURL : avatar
                }
                alt=""
              />
              <div className="userInfo">
                <span>{chat[1].userInfo.displayName}</span>
                {chat[1].lastMessage?.text && (
                  <p>
                    {chat[1].lastMessage.text.length > 17
                      ? chat[1].lastMessage.text.slice(0, 17) + "..."
                      : chat[1].lastMessage.text}
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
