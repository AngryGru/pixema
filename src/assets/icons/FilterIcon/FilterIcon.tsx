import React from "react";
import styles from "./FilterIcon.module.scss";

const FilterIcon = ({ status }: any) => {
  return (
    <div>
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.ellipse}
        display={status ? "inline" : "none"}
      >
        <circle cx="3" cy="3" r="3" fill="#7B61FF" />
      </svg>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L15 1M6 7H15M10 13H15"
          stroke={status ? "#FFFF" : "#AFB2B6"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default FilterIcon;
