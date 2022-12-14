import React, { useState } from "react";
import Add from "../assets/images/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import css from "../styles/Register.module.css";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    const img = e.target[4].files[0];

    try {
      if (password !== confirmPassword) {
        setErr("Password hasn't matched!");
      } else if (password.length <= 5 || confirmPassword.length <= 5) {
        setErr("Password has to more than 5 characters");
      } else if (img === undefined) {
        setErr("Image is required!");
      } else {
        await signup(displayName, email, password, img, navigate);
      }
    } catch (error) {
      setErr("Something went wrong!");
    }
  };

  return (
    <div className={css.register}>
      <div className={css.container}>
        <div className={css.heading}>
          <h1>Chat App</h1>
          <h3>Register</h3>
        </div>
        <div className={css.formWrapper}>
          <form onSubmit={submitHandler}>
            <input type="text" required placeholder="Enter your name" />
            <input type="email" required placeholder="Enter your email" />
            <input type="password" required placeholder="Enter your password" />
            <input
              type="password"
              required
              placeholder="Enter your confirm password"
            />
            <input
              type="file"
              id="file"
              name="file"
              style={{ display: "none" }}
            />
            <label htmlFor="file" className={css.fileField}>
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            <Button>Sign Up</Button>
            {err && <p className="error">{err}</p>}
          </form>
          <p className={css.msg}>
            Do you have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
