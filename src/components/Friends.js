import Search from "./Search";
import user from "../assets/images/client6.jpg";
import css from "../styles/Friends.module.css";

export default function Friends() {
  return (
    <div className={css.friends}>
      <Search />
      <div className={css.chatedUser}>
        <div className="user">
          <img src={user} alt="" />
          <div className="userInfo">
            <span>Smith</span>

            <p>last message</p>
          </div>
        </div>
      </div>
    </div>
  );
}
