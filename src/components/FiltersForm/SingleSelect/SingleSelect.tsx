import React, { useEffect, useState } from "react";
import "./SingleSelect.scss";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import Select, { SingleValue } from "react-select";
import { Theme } from "../../../common/types";
import { useThemeContext } from "../../../context/themeModeContext";
import { countries } from "../../../common/countriesOptions";
import { setFiltersCountry } from "../../../redux/reducers/filterReducer";

export interface IOption {
  label: string;
  value: string;
}

const SingleSelect = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;
  const dispatch = useDispatch();

  const [currentCountry, setCurrentCountry] = useState("");
  const optionsCountry: IOption[] = countries;

  useEffect(() => {
    dispatch(setFiltersCountry(currentCountry));
  }, [currentCountry]);

  const getValueCountry = () => {
    return currentCountry
      ? optionsCountry.find((c) => c.value === currentCountry)
      : "";
  };

  const onChangeCountry = (newValue: SingleValue<string | IOption>) => {
    setCurrentCountry((newValue as IOption).value);
  };

  return (
    <div className={classnames("singleSelect", "formSelectItem")}>
      <span>Country</span>

      <Select
        classNamePrefix={isDarkTheme ? "singleSelect" : "singleSelectLight"}
        onChange={onChangeCountry}
        value={getValueCountry()}
        options={optionsCountry}
        placeholder={"Select country"}
      />
    </div>
  );
};
export default SingleSelect;
