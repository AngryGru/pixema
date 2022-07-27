import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelector } from "../../redux/reducers/authReducer";
import "./User.scss";
import UserIcon from "../../assets/icons/UserIcon";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Popup from "reactjs-popup";
import { setLogout } from "../../redux/reducers/authReducer";
import { setActiveTab } from "../../redux/reducers/movieReducer";
import classNames from "classnames";
import { Theme } from "../../common/types";
import { useThemeContext } from "../../context/themeModeContext";

const User = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const [isAngleActive, setAngleActive] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(setLogout(""));
  };

  const onEditClick = () => {
    navigate("/settings");
    dispatch(setActiveTab("settings"));
  };

  const username = useSelector(AuthSelector.getUsername);

  return (
    <Popup
      position="bottom center"
      onOpen={() => {
        setAngleActive(true);
      }}
      onClose={() => {
        setAngleActive(false);
      }}
      trigger={
        <div
          className={classNames("userContainer", {
            ["userContainerLight"]: !isDarkTheme,
          })}
        >
          <div className={"userInfo"}>
            <div className={"userIcon"}>
              {username ? username.charAt(0) : <UserIcon />}
            </div>
            <div className={"userName"}>{username ? username : "Me"}</div>
          </div>
          <div className={"userAngle"}>
            {isAngleActive ? <FaAngleDown /> : <FaAngleRight />}
          </div>
        </div>
      }
    >
      <div
        className={classNames("popupContent", {
          ["popupContentLight"]: !isDarkTheme,
        })}
      >
        <div className={"popupContentItem topItem"} onClick={onEditClick}>
          <p>Edit profile</p>
        </div>
        <div className={"popupContentItem bottomItem"} onClick={onLogoutClick}>
          <p>Log out</p>
        </div>
      </div>
    </Popup>
  );
};

export default User;
