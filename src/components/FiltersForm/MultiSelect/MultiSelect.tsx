import React, { useEffect, useState } from "react";
import "./MultiSelect.scss";
import classnames from "classnames";
import Select, { OnChangeValue } from "react-select";
import { useThemeContext } from "../../../context/themeModeContext";
import { Theme } from "../../../common/types";
import { useDispatch } from "react-redux";
import { setFiltersGenres } from "../../../redux/reducers/filterReducer";

export interface IOption {
  label: string;
  value: string;
}

const MultiSelect = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();

  const [currentGenre, setCurrentGenre] = useState([""]);
  const options: IOption[] = [
    { label: "Romance", value: "romance" },
    { label: "Mystery", value: "mystery" },
    { label: "Horror", value: "horror" },
    { label: "Science Fiction", value: "scienceFiction" },
    { label: "Comedy", value: "comedy" },
    { label: "Thriller", value: "thriller" },
    { label: "Action", value: "action" },
    { label: "Drama", value: "drama" },
  ];
  useEffect(() => {
    dispatch(setFiltersGenres(currentGenre));
  }, [currentGenre]);

  const getValueGenres = () => {
    return currentGenre
      ? options.filter((option) => currentGenre.indexOf(option.value) >= 0)
      : [];
  };

  const onChangeGenres = (newValue: OnChangeValue<IOption, boolean>) => {
    setCurrentGenre((newValue as IOption[]).map((v: any) => v.value));
  };

  return (
    <div className={classnames("multiSelect", "formSelectItem")}>
      <span>Genre</span>

      <Select
        classNamePrefix={isDarkTheme ? "multiSelect" : "multiSelectLight"}
        onChange={onChangeGenres}
        value={getValueGenres()}
        options={options}
        isMulti
      />
    </div>
  );
};
export default MultiSelect;
