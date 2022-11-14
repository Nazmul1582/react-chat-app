import img from "../assets/images/mountain.jpg";
import css from "../styles/Search.module.css";
export default function Search() {
  return (
    <div className={css.search}>
      <input type="text" placeholder="Search user..." />
      <div className={css.searchedUser}>
        <div className="user">
          <img src={img} alt="" />
          <div className="userInfo">
            <span>Andrew</span>
          </div>
        </div>
      </div>
    </div>
  );
}
