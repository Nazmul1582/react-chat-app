import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import css from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={css.home}>
        <div className={css.container}>
          <Sidebar />
          <Chat />
        </div>
      </div>
    </div>
  );
}
