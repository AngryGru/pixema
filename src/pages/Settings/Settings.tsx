import React, { useState } from "react";
import "./Settings.scss";
import LabelItem from "./LabelItem";
import Switch from "../../components/Switch";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import { AuthSelector } from "../../redux/reducers/authReducer";

const Settings = () => {
  const profileName = useSelector(AuthSelector.getUsername);
  const profileEmail = useSelector(AuthSelector.getEmail);

  return (
    <div className={"settingsContainer"}>
      <div className={"itemContainer"}>
        <p className={"itemTitle"}>Profile</p>
        <div className={"itemContent"}>
          <LabelItem
            title={"Name"}
            inputType={"text"}
            inputPlaceholder={"Your name"}
            inputValue={profileName}
            inputReadonly={true}
            inputClassName={"inpDisabled"}
          />
          <LabelItem
            title={"Email"}
            inputType={"email"}
            inputPlaceholder={"Your email"}
            inputValue={profileEmail}
            inputReadonly={true}
            inputClassName={"inpDisabled"}
          />
        </div>
      </div>

      <div className={"itemContainer"}>
        <p className={"itemTitle"}>Password</p>
        <div className={"itemContent"}>
          <div className={"passwordItem"}>
            <LabelItem
              title={"Password"}
              inputType={"password"}
              inputPlaceholder={"Your password"}
            />
          </div>
          <div className={"confirmPasswordItem"}>
            <LabelItem
              title={"New password"}
              inputType={"password"}
              inputPlaceholder={"New password"}
            />
            <LabelItem
              title={"Confirm password"}
              inputType={"password"}
              inputPlaceholder={"Confirm password"}
            />
          </div>
        </div>
      </div>

      <div className={"itemContainer"}>
        <p className={"itemTitle"}>Color mode</p>
        <div className={"colorModeContent"}>
          <div>
            <p className={"colorModeTitle"}>Light</p>
            <p className={"colorModeDescription"}>Use light theme</p>
          </div>
          <div>
            <Switch />
          </div>
        </div>
      </div>

      <div className={"actions"}>
        <Button className={"secondary cancelBtn"}>Cancel</Button>
        <Button className={"primary saveBtn"}>Save</Button>
      </div>
    </div>
  );
};

export default Settings;
