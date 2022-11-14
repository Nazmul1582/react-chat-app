import { Link } from "react-router-dom";
import Add from "../assets/images/addAvatar.png";
import Button from "../components/Button";
import css from "../styles/Register.module.css";

export default function Register() {
  return (
    <div className={css.register}>
      <div className={css.container}>
        <div className={css.heading}>
          <h1>Chat App</h1>
          <h3>Register</h3>
        </div>
        <div className={css.formWrapper}>
          <form>
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
              required
              name="file"
              style={{ display: "none" }}
            />
            <label htmlFor="file" className={css.fileField}>
              <img src={Add} alt="" />
              <span>Add a avatar</span>
            </label>
            <Button>Sign Up</Button>
            {/* <p className="error"> Something went wrong! </p> */}
          </form>
          <p className={css.msg}>
            Do you have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
