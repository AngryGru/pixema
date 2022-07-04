import React, { useState } from "react";
import "./User.scss";
import UserIcon from "../../assets/icons/UserIcon";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Popup from "reactjs-popup";

const User = () => {
  const [isAngleActive, setAngleActive] = useState(false);

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
        <div className={"userContainer"}>
          <div className={"userInfo"}>
            <div className={"userIcon"}>
              <UserIcon />
            </div>
            <div className={"userName"}>Sign In</div>
          </div>
          <div className={"userAngle"}>
            {isAngleActive ? <FaAngleDown /> : <FaAngleRight />}
          </div>
        </div>
      }
    >
      <div className={"popupContent"}>
        <div className={"popupContentItem topItem"}>
          <a>Edit profile</a>
        </div>
        <div className={"popupContentItem bottomItem"}>
          <a>Log out</a>
        </div>
      </div>
    </Popup>
  );
};

export default User;
