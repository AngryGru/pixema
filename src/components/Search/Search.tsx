import React, { useState } from "react";
import styles from "./Search.module.scss";
import classNames from "classnames";
import FilterIcon from "../../assets/icons/FilterIcon";

const Search = () => {
  const [status, setStatus] = useState(false);

  const onFilterClick = () => {
    status ? setStatus(false) : setStatus(true);
  };

  return (
    <form className={styles.form}>
      <input type="text" placeholder="Search" className={styles.inputDefault} />
      <div className={styles.iconDefault} onClick={onFilterClick}>
        <FilterIcon status={status} />
      </div>
    </form>
  );
};

export default Search;
