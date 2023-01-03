import Messages from "./Messages";
import Input from "./Input";
import { useChat } from "../contexts/ChatContext";
import css from "../styles/Chat.module.css";

const Chat = () => {
  const { data } = useChat();

  return (
    <div className={css.chat}>
      <div className={css.activeUser}>
        <div className={css.user}>
          {data.user.photoURL && (
            <img className={css.hide} src={data.user.photoURL} alt="" />
          )}
          <div className={`userInfo`}>
            <span>
              {data.user.displayName?.length >= 12
                ? data.user.displayName.split(" ")[0]
                : data.user.displayName}
            </span>
          </div>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
