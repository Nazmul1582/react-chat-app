import { Link } from "react-router-dom";
import Button from "../components/Button";
import css from "../styles/Register.module.css";

export default function Login() {
  return (
    <div className={css.register}>
      <div className={css.container}>
        <div className={css.heading}>
          <h1>Chat App</h1>
          <h3>Login</h3>
        </div>
        <div className={css.formWrapper}>
          <form>
            <input type="email" required placeholder="Enter your email" />
            <input type="password" required placeholder="Enter your password" />
            <input
              type="password"
              required
              placeholder="Enter your confirm password"
            />
            <Button>Login</Button>
            {/* <p className="error"> Something went wrong! </p>} */}
          </form>
          <p className={css.msg}>
            Don't you have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
