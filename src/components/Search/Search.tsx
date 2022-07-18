import React, { useState } from "react";
import "./Search.scss";
import classNames from "classnames";
import FilterIcon from "../../assets/icons/FilterIcon";
import { useDispatch, useSelector } from "react-redux";
import { loadSearchResults } from "../../redux/reducers/movieReducer";
import {
  FilterSelectors,
  setFilterVisible,
} from "../../redux/reducers/filterReducer";
import { Theme } from "../../common/types";
import { useThemeContext } from "../../context/themeModeContext";
import FiltersForm from "../FiltersForm";

const Search = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();

  const onSearchChange = (event: any) => {
    setSearchValue(event.target.value);
    dispatch(loadSearchResults(event.target.value));
  };

  const isFiltersVisible = useSelector(FilterSelectors.getFilterVisible);
  console.log("filter visible", isFiltersVisible);

  const onFilterClick = () => {
    status ? setStatus(false) : setStatus(true);
    dispatch(
      isFiltersVisible ? setFilterVisible(false) : setFilterVisible(true)
    );
  };

  return (
    <div
      className={classNames("form", {
        ["formLight"]: !isDarkTheme,
      })}
    >
      <input
        value={searchValue}
        onChange={(e) => onSearchChange(e)}
        type="text"
        placeholder="Search"
        className={"inputDefault"}
      />
      <div className={"iconDefault"} onClick={onFilterClick}>
        <FilterIcon status={status} />
      </div>
      <FiltersForm />
    </div>
  );
};

export default Search;
