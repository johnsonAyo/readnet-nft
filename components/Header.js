import React from "react";
import styles from "../styles/Home.module.scss";
import { FaToggleOn } from "react-icons/fa";

const Header = ({ user, logout, isLoggingOut }) => {
  return (
    <>
      <div className={styles.nav}>
        <div>
          Readnet Assessment <span className={styles.badge}>test Badge</span>
        </div>

        <div>
          <FaToggleOn
            onClick={logout}
            disabled={isLoggingOut}
            className={styles.icon}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
