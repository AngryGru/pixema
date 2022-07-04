import React, { useState } from "react";
import "./Search.scss";
import classNames from "classnames";
import FilterIcon from "../../assets/icons/FilterIcon";

const Search = () => {
  const [status, setStatus] = useState(false);

  const onFilterClick = () => {
    status ? setStatus(false) : setStatus(true);
  };

  return (
    <div className={"form"}>
      <input type="text" placeholder="Search" className={"inputDefault"} />
      <div className={"iconDefault"} onClick={onFilterClick}>
        <FilterIcon status={status} />
      </div>
    </div>
  );
};

export default Search;
