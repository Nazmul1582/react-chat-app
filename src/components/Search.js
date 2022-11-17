import React, { useState } from "react";
import useSearch from "../hooks/useSearch";
import css from "../styles/Search.module.css";

export default function Search() {
  const [username, setUsername] = useState("");
  const { err, user, handleKey, handleSelect } = useSearch();

  return (
    <div className={css.search}>
      <input
        type="text"
        placeholder="Search user..."
        onKeyDown={(e) => handleKey(e)}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <div className={css.searchedUser}>
        {user &&
          user.map((u) => (
            <div
              className="user"
              onClick={() => {
                handleSelect(u);
                setUsername("");
              }}
              key={u.uid}
            >
              <img src={u.photoURL} alt="" />
              <div className="userInfo">
                <span>{u.displayName}</span>
              </div>
            </div>
          ))}

        {err && <p>No user found!</p>}
      </div>
    </div>
  );
}
