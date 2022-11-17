import { useEffect, useRef } from "react";
import Moment from "react-moment";
import { useChat } from "../contexts/ChatContext";
import { useAuth } from "../contexts/AuthContext";
import css from "../styles/Message.module.css";

export default function Message({ message }) {
  const { currentUser } = useAuth();
  const { data } = useChat();
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <div
        ref={ref}
        className={
          currentUser.uid === message.senderId
            ? `${css.owner} ${css.message}`
            : css.message
        }
      >
        <div className={css.msgInfo}>
          <img
            src={
              currentUser.uid === message.senderId
                ? currentUser.photoURL
                : data.user.photoURL
            }
            alt="img"
          />
          <Moment fromNow>{message.date.toDate()}</Moment>
        </div>
        <div className={css.msgContent}>
          {message.text && <p className={css.text}>{message.text}</p>}
          <img src={message.img} alt="" />
        </div>
      </div>
    </>
  );
}
