import React from "react";
import userStyles from "./User.module.scss";
import UserIcon from "../../assets/icons/UserIcon";
import { FaAngleRight } from "react-icons/fa";

const User = () => {
  return (
    <div className={userStyles.userContainer}>
      <div className={userStyles.userInfo}>
        <div className={userStyles.userIcon}>
          <UserIcon />
        </div>
        <div className={userStyles.userName}>Sign In</div>
      </div>
      <div className={userStyles.userAngle}>
        <FaAngleRight />
      </div>
    </div>
  );
};

export default User;
