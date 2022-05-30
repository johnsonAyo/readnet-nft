import React from "react";
import styles from "../styles/Home.module.scss";
import { FaToggleOn } from "react-icons/fa";

const Header = ({ user, logout, isLoggingOut }) => {
  return (
    <>
      <div className={styles.nav}>
        <div>Readnet Accessment</div>

        <div>
          <FaToggleOn
            onClick={logout}
            disabled={isLoggingOut}
            className={styles.icon}
          ></FaToggleOn>
        </div>
      </div>
    </>
  );
};

export default Header;
