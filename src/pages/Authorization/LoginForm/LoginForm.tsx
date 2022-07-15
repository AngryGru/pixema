import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./LoginForm.scss";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { AuthSelector, loginUser } from "../../../redux/reducers/authReducer";
import Lottie from "react-lottie";
import animationData from "../../../components/Lotties/thorHummer.json";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState("This field is required");
  const [passwordError, setPasswordError] = useState("This field is required");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

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
    const regex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z*]/g;
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const onBlur = (e: any) => {
    if (e.target.name === "email") {
      setEmailDirty(true);
    }
    if (e.target.name === "password") {
      setPasswordDirty(true);
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    dispatch(loginUser({ email, password, token_name: "desktop" }));
  };

  const isLoading = useSelector(AuthSelector.getAuthLoading);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loginFormContainer">
      {isLoading ? (
        <Lottie options={defaultOptions} height={400} width={500} />
      ) : (
        <div className="loginForm">
          <div className="loginFormTitle">Sign In</div>
          <label>
            <div>Email:</div>
            <div>
              {emailDirty && emailError && (
                <span style={{ color: "red" }}>{emailError}</span>
              )}
            </div>
            <Input
              className={"loginInp"}
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
              className={"loginInp"}
              type={"password"}
              name={"password"}
              value={password}
              placeholder={"Enter your password"}
              onBlur={(e: any) => onBlur(e)}
              onChange={(e: any) => onPasswordChange(e)}
            />
          </label>
          <Button
            className={"primary loginBtn"}
            disabled={!formValid}
            onClick={onSubmit}
          >
            Sign In
          </Button>
          <div className={"loginText"}>
            Do not have an account?{" "}
            <span
              className={"loginLink"}
              onClick={() => navigate("/registration")}
            >
              Sign Up
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
