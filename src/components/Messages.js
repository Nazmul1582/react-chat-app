import useMessages from "../hooks/useMessages";
import css from "../styles/Messages.module.css";
import Message from "./Message";

const Messages = () => {
  const { messages } = useMessages();
  return (
    <div className={css.messages}>
      {messages ? (
        messages.map((m) => <Message message={m} key={m.id} />)
      ) : (
        <p>Choose a chat to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
