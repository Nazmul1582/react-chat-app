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

/*
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import css from "../styles/Register.module.css";

export default function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setErr(err);
    }
  };
  console.log("Error: ", err);

  return (
    <div className={css.register}>
      <div className={css.container}>
        <div className={css.heading}>
          <h1>Chat App</h1>
          <h3>Login</h3>
        </div>
        <div className={css.formWrapper}>
          <form onSubmit={handleSubmit}>
            <input type="email" required placeholder="Enter your email" />
            <input type="password" required placeholder="Enter your password" />
            <Button>Login</Button>
            {err && <p className="error">Something went wrong!</p>}
          </form>
          <p className={css.msg}>
            Don't you have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

*/
