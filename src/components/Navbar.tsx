import React from "react";
import styles from "./Navbar.module.scss";
import Search from "./Search";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>Bingely</h1>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/favorites">My List</Link>
      </div>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
