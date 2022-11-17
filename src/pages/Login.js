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
    const confirmPassword = e.target[2].value;
    if (password !== confirmPassword) {
      setErr("Passwords don't matched!");
    } else {
      try {
        await login(email, password, confirmPassword);
        navigate("/");
      } catch (error) {
        setErr(true);
      }
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
            <input
              type="password"
              required
              placeholder="Enter your confirm password"
            />
            {err && <p className="error">{err}</p>}
            <Button>Login</Button>
            {err && <p className="error"> Something went wrong! </p>}
          </form>
          <p className={css.msg}>
            Don't you have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
