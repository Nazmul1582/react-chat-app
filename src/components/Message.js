import owner from "../assets/images/client5.jpg";
import user from "../assets/images/client6.jpg";
import img from "../assets/images/mountain.jpg";
import css from "../styles/Message.module.css";

export default function Message() {
  return (
    <>
      <div className={`${css.owner} ${css.message}`}>
        <div className={css.msgInfo}>
          <img src={owner} alt="img" />
          <span>Just now</span>
        </div>
        <div className={css.msgContent}>
          <p className={css.text}>Hello!</p>
          <img src={img} alt="" />
        </div>
      </div>

      <div className={`${css.message}`}>
        <div className={css.msgInfo}>
          <img src={user} alt="img" />
          <span>Just now</span>
        </div>
        <div className={css.msgContent}>
          <p className={css.text}>Hello! What's up?</p>
        </div>
      </div>

      <div className={`${css.owner} ${css.message}`}>
        <div className={css.msgInfo}>
          <img src={owner} alt="img" />
          <span>Just now</span>
        </div>
        <div className={css.msgContent}>
          <p className={css.text}>Alhamdulillah! Allah kept me well.</p>
        </div>
      </div>
    </>
  );
}
