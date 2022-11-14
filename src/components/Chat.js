import Messages from "./Messages";
import Input from "./Input";
import user from "../assets/images/client6.jpg";
import css from "../styles/Chat.module.css";

const Chat = () => {
  return (
    <div className={css.chat}>
      <div className={css.activeUser}>
        <div className="user">
          <img src={user} alt="" />
          <div className="userInfo">
            <span>Smith</span>
          </div>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
