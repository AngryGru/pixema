import React, { useState, useEffect } from "react";
import "./RegistrationForm.scss";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../redux/reducers/authReducer";

const RegistrationForm = () => {
  const [formValid, setFormValid] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameDirty, setUsernameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);

  const [usernameError, setUsernameError] = useState("This field is required");
  const [emailError, setEmailError] = useState("This field is required");
  const [passwordError, setPasswordError] = useState("This field is required");
  const [confirmPasswordError, setConfirmPasswordError] = useState(
    "This field is required"
  );

  useEffect(() => {
    if (usernameError || emailError || passwordError || confirmPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [usernameError, emailError, passwordError, confirmPasswordError]);

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
    const regex = /[^!@#$%^&*()]/g;
    if (!regex.test(String(e.target.value))) {
      setUsernameError("This field should not contain !@#$%^&*()");
    } else if (e.target.value.length === 0) {
      setUsernameError("This field is required");
    } else {
      setUsernameError("");
    }
  };
  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setEmailError("Invalid email adress");
    } else {
      setEmailError("");
    }
  };
  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };
  const onConfirmPassword = (e: any) => {
    setConfirmPassword(e.target.value);
    if (confirmPassword && e.target.value !== password) {
      setConfirmPasswordError("Passwords don't match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const onBlur = (e: any) => {
    if (e.target.name === "username") {
      setUsernameDirty(true);
    }
    if (e.target.name === "email") {
      setEmailDirty(true);
    }
    if (e.target.name === "password") {
      setPasswordDirty(true);
    }
    if (e.target.name === "confirmPassword") {
      setConfirmPasswordDirty(true);
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = () => {
    const callback = () => {
      navigate("/login");
    };

    dispatch(
      registerUser({
        first_name: username,
        email,
        password,
        password_confirmation: confirmPassword,
        token_name: "iphone 12",
        callback,
      })
    );
  };
  return (
    <div className="registrationFormContainer">
      <div className="registrationForm">
        <div className="registrationFormTitle">Sign Up</div>
        <label>
          <div>Name:</div>
          <div>
            {usernameDirty && usernameError && (
              <span style={{ color: "red" }}>{usernameError}</span>
            )}
          </div>
          <Input
            className="regInp"
            type={"text"}
            name={"username"}
            value={username}
            placeholder={"Your name"}
            onBlur={(e: any) => onBlur(e)}
            onChange={(e: any) => onUsernameChange(e)}
          />
        </label>

        <label>
          <div>Email:</div>
          <div>
            {emailDirty && emailError && (
              <span style={{ color: "red" }}>{emailError}</span>
            )}
          </div>
          <Input
            className="regInp"
            type={"email"}
            name={"email"}
            value={email}
            placeholder={"Your email"}
            onBlur={(e: any) => onBlur(e)}
            onChange={(e: any) => onEmailChange(e)}
          />
        </label>
        <label>
          <div>Password:</div>
          <div>
            {passwordDirty && passwordError && (
              <span style={{ color: "red" }}>{passwordError}</span>
            )}
          </div>
          <Input
            className="regInp"
            type={"password"}
            name={"password"}
            value={password}
            placeholder={"Your password"}
            onBlur={(e: any) => onBlur(e)}
            onChange={(e: any) => onPasswordChange(e)}
          />
        </label>
        <label>
          <div>Confirm password:</div>
          <div>
            {confirmPasswordDirty && confirmPasswordError && (
              <span style={{ color: "red" }}>{confirmPasswordError}</span>
            )}
          </div>
          <Input
            className="regInp"
            type={"password"}
            name={"confirmPassword"}
            value={confirmPassword}
            placeholder={"Confirm password"}
            onBlur={(e: any) => onBlur(e)}
            onChange={(e: any) => onConfirmPassword(e)}
          />
        </label>
        <Button
          className={"primary registrationBtn"}
          disabled={!formValid}
          onClick={onSubmit}
        >
          Sign Up
        </Button>
        <div className={"registrationText"}>
          Already have an account?{" "}
          <span
            className={"registrationLink"}
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
