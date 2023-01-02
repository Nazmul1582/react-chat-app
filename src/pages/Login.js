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

    try {
      await login(email, password, confirmPassword);
      navigate("/");
    } catch (error) {
      if (password !== confirmPassword) {
        setErr("Password hasn't matched!");
      } else if (password.length <= 5 || confirmPassword.length <= 5) {
        setErr("Password has to more than 5 characters");
      } else {
        setErr("Something went wrong!");
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
