import React from "react";
import Navbar from "./Navbar";
import Friends from "./Friends";
import css from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <Navbar />
      <Friends />
    </div>
  );
};

export default Sidebar;
