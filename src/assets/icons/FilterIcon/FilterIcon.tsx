import React from "react";
import "./FilterIcon.scss";
import classNames from "classnames";
import { Theme } from "../../../common/types";
import { useThemeContext } from "../../../context/themeModeContext";

import { useSelector } from "react-redux";
import { FilterSelectors } from "../../../redux/reducers/filterReducer";

const FilterIcon = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const isFiltersStatus = useSelector(FilterSelectors.getFilterStatus);

  return (
    <div>
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"ellipse"}
        // display={status ? "inline" : "none"}
        display={isFiltersStatus ? "inline" : "none"}
      >
        <circle cx="3" cy="3" r="3" />
      </svg>
      <svg
        className={classNames("filter", {
          ["activeFilter"]: isFiltersStatus,
          ["filterLight"]: !isDarkTheme,
        })}
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L15 1M6 7H15M10 13H15"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default FilterIcon;
