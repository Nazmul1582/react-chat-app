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
      setErr("Something went wrong!");
    }
  };
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
            {err && <p className="error">{err}</p>}
          </form>
          <p className={css.msg}>
            Don't you have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
