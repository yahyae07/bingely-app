import React from "react";
import styles from "./Navbar.module.scss";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>Bingely</h1>
      <div className={styles.navLinks}>
        <a href="/">Home</a>
        <a href="/favorites">My List</a>
      </div>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
