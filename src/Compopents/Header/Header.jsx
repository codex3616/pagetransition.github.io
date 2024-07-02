import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
