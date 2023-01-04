import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { IoMdAttach } from "react-icons/io";
import css from "../styles/Input.module.css";
import useInput from "../hooks/useInput";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { handleSend } = useInput(text, setText, img, setImg);
  return (
    <div className={css.inputField}>
      <input
        type="file"
        id="file"
        style={{ display: "none" }}
        onChange={(e) => setImg(e.target.files[0])}
      />
      <label className={css.attach} htmlFor="file">
        <IoMdAttach />
      </label>
      <input
        type="text"
        placeholder="type your message"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={(e) => e.code === "Enter" && handleSend()}
      />
      <div className={css.send} onClick={handleSend}>
        <IoSend />
      </div>
    </div>
  );
};

export default Input;
