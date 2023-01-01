import Messages from "./Messages";
import Input from "./Input";
import { useChat } from "../contexts/ChatContext";
import css from "../styles/Chat.module.css";
import avatar from "../assets/images/avatar.png";

const Chat = () => {
  const { data } = useChat();
  return (
    <div className={css.chat}>
      <div className={css.activeUser}>
        <div className={css.user}>
          {data.user.photoURL && (
            <img
              className={css.hide}
              src={data.user.photoURL ? data.user.photoURL : avatar}
              alt=""
            />
          )}
          <div className={`userInfo`}>
            <span>{data.user.displayName}</span>
          </div>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
