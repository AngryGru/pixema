import React, { useState } from "react";
import "./Search.scss";
import classNames from "classnames";
import FilterIcon from "../../assets/icons/FilterIcon";
import { useDispatch } from "react-redux";
import { loadSearchResults } from "../../redux/reducers/movieReducer";
import { Theme } from "../../common/types";
import { ThemeModeProvider } from "../../context/ThemeModeProvider";
import { useThemeContext } from "../../context/themeModeContext";

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

  const onFilterClick = () => {
    status ? setStatus(false) : setStatus(true);
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
    </div>
  );
};

export default Search;
