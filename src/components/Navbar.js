import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../contexts/AuthContext";
import css from "../styles/Navbar.module.css";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div className={css.navbar}>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <div className="userInfo">
          <span>{currentUser.displayName}</span>
        </div>
      </div>
      <div className={css.logoutIcon} onClick={logout}>
        <FiLogOut />
      </div>
    </div>
  );
};

export default Navbar;
