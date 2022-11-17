import Messages from "./Messages";
import Input from "./Input";
import { useChat } from "../contexts/ChatContext";
import css from "../styles/Chat.module.css";

const Chat = () => {
  const { data } = useChat();
  return (
    <div className={css.chat}>
      <div className={css.activeUser}>
        <div className="user">
          {data.user.photoURL && <img src={data.user.photoURL} alt="" />}
          <div className="userInfo">
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
