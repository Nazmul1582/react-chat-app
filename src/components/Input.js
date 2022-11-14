import { IoSend } from "react-icons/io5";
import { IoMdAttach } from "react-icons/io";
import css from "../styles/Input.module.css";

const Input = () => {
  return (
    <div className={css.inputField}>
      <input type="file" id="file" style={{ display: "none" }} />
      <label className={css.attach} htmlFor="file">
        <IoMdAttach />
      </label>
      <input type="text" placeholder="type your message" />
      <div className={css.send}>
        <IoSend />
      </div>
    </div>
  );
};

export default Input;
