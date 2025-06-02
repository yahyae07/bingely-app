"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
