"use client";

import React from "react";
import styles from "./Navbar.module.scss";
import Search from "./Search";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>Bingely</h1>
      <div className={styles.navLinks}>
        <Link href="/" className={pathname === "/" ? styles.active : ""}>
          Home
        </Link>
        <Link
          href="/favorites"
          className={pathname === "/favorites" ? styles.active : ""}
        >
          My List
        </Link>
      </div>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
