import { FiLogOut } from "react-icons/fi";
import img from "../assets/images/client5.jpg";
import css from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={css.navbar}>
      <div className="user">
        <img src={img} alt="" />
        <div className="userInfo">
          <span>Nazmul</span>
        </div>
      </div>
      <div className={css.logoutIcon}>
        <FiLogOut />
      </div>
    </div>
  );
};

export default Navbar;
