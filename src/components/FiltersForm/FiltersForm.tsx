import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterSelectors,
  setFilterVisible,
  setFilterStatus,
  setFiltersCountry,
  setFiltersGenres,
  setReleasedFrom,
  setReleasedTo,
  setScoreFrom,
  setScoreTo,
  setFiltersType,
} from "../../redux/reducers/filterReducer";
import "./FiltersForm.scss";
import classNames from "classnames";
import Button from "../Button";
import { Theme } from "../../common/types";
import { useThemeContext } from "../../context/themeModeContext";
import { AiOutlineClose } from "react-icons/ai";
import Input from "../Input";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import { loadMovieList } from "../../redux/reducers/movieReducer";

const FormSelect = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const [yearsFrom, setYearsFrom] = useState(0);
  const [yearsTo, setYearsTo] = useState(0);
  const [ratingFrom, setRatingFrom] = useState(0);
  const [ratingTo, setRatingTo] = useState(0);

  const onChange = (event: any) => {
    const value = event.target.value;
    switch (event.target.name) {
      case "yearsFrom":
        setYearsFrom(value);
        dispatch(setReleasedFrom(value));
        break;
      case "yearsTo":
        setYearsTo(value);
        dispatch(setReleasedTo(value));
        break;
      case "ratingFrom":
        setRatingFrom(value);
        dispatch(setScoreFrom(value));
        break;
      case "ratingTo":
        setRatingTo(value);
        dispatch(setScoreTo(value));
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();
  const isFilterVisible = useSelector(FilterSelectors.getFilterVisible);

  const onClickFiltersClose = () => {
    dispatch(
      isFilterVisible ? setFilterVisible(false) : setFilterVisible(true)
    );
  };

  const onClickSortBtn = (value: string) => {
    dispatch(setFiltersType(value));
  };

  const onClearFilterClick = () => {
    dispatch(setFilterStatus(false));
    dispatch(setFiltersCountry(""));
    dispatch(setFiltersGenres([]));
    dispatch(setReleasedFrom(null));
    dispatch(setReleasedTo(null));
    dispatch(setScoreFrom(null));
    dispatch(setScoreTo(null));
    setYearsFrom(0);
    setYearsTo(0);
    setRatingFrom(0);
    setRatingTo(0);
  };

  const genre = useSelector(FilterSelectors.getFiltersGenres);
  const country = useSelector(FilterSelectors.getFiltersCountry);
  const type = useSelector(FilterSelectors.getFiltersType);
  const years = useSelector(FilterSelectors.getReleased);
  const ratings = useSelector(FilterSelectors.getScore);
  const released = Object.values(years).join();
  const score = Object.values(ratings).join();

  const onShowResultsClick = () => {
    dispatch(setFilterStatus(true));
    dispatch(loadMovieList({ type, genre, country, released, score }));
  };

  return (
    <div
      className={classNames("filterContainer", {
        ["filterContainerVisible"]: isFilterVisible,
        ["filterContainerLight"]: !isDarkTheme,
      })}
    >
      <div className="filterContainerHeader">
        <h2>Filters</h2>
        <div className="filterContainerClose" onClick={onClickFiltersClose}>
          <AiOutlineClose />
        </div>
      </div>

      <div className="filterContent">
        <div className="filterContentItem">
          <span>Sort by</span>
          <div className="sortBtnsContainer">
            <Button className="sortBtn" onClick={() => onClickSortBtn("movie")}>
              {"Movie"}
            </Button>
            <Button
              className="sortBtn"
              onClick={() => onClickSortBtn("series")}
            >
              {"Series"}
            </Button>
          </div>
        </div>

        <div className="filterContentItem">
          <MultiSelect />
        </div>

        <div className="filterContentItem">
          <SingleSelect />
        </div>

        <div className="filterContentItem">
          <span>Years</span>
          <div className="filterItemRange">
            <Input
              type={"number"}
              name={"yearsFrom"}
              value={yearsFrom}
              onChange={(e) => onChange(e)}
              placeholder="From"
              className={classNames("input", { ["inputLight"]: !isDarkTheme })}
            />
            <Input
              type={"number"}
              name={"yearsTo"}
              value={yearsTo}
              onChange={(e) => onChange(e)}
              placeholder="To"
              className={classNames("input", { ["inputLight"]: !isDarkTheme })}
            />
          </div>
        </div>

        <div className="filterContentItem">
          <span>Rating</span>
          <div className="filterItemRange">
            <Input
              type={"number"}
              name={"ratingFrom"}
              value={ratingFrom}
              onChange={(e) => onChange(e)}
              placeholder="From"
              className={classNames("input", { ["inputLight"]: !isDarkTheme })}
            />
            <Input
              type={"number"}
              name={"ratingTo"}
              value={ratingTo}
              onChange={(e) => onChange(e)}
              placeholder="To"
              className={classNames("input", { ["inputLight"]: !isDarkTheme })}
            />
          </div>
        </div>
      </div>

      <div className="filterContentActions">
        <Button className={"secondary cancelBtn"} onClick={onClearFilterClick}>
          {"Clear filter"}
        </Button>
        <Button className={"primary saveBtn"} onClick={onShowResultsClick}>
          {"Show results"}
        </Button>
      </div>
    </div>
  );
};
export default FormSelect;
