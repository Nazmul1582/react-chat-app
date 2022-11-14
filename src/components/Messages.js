import css from "../styles/Messages.module.css";
import Message from "./Message";

const Messages = () => {
  return (
    <div className={css.messages}>
      <Message />
    </div>
  );
};

export default Messages;
