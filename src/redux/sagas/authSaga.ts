import { all, takeLatest, put, call } from "redux-saga/effects";
import { RegisterUser } from "../../common/types";

import { PayloadAction } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  setLogStatus,
  setLogout,
  setUsername,
  setEmail,
  getUserInfo,
  setAuthLoading,
} from "../reducers/authReducer";
import { registerUserApi, loginUserApi, getUserInfoApi } from "../api";

function* registerUserSaga(action: PayloadAction<RegisterUser>) {
  const {
    callback,
    email,
    first_name,
    password,
    password_confirmation,
    token_name,
  } = action.payload;

  const { data, status, problem } = yield call(registerUserApi, {
    email,
    first_name,
    password,
    password_confirmation,
    token_name,
  });

  if (status === 200) {
    callback();
  }
}

function* loginUserSaga(action: any) {
  yield put(setAuthLoading(true));

  const userData = action.payload;
  const { status, data } = yield call(loginUserApi, userData);

  if (status === 200) {
    localStorage.setItem("jwtAccessToken", data.user.access_token);
    yield put(setLogStatus(true));
  }
  yield put(setAuthLoading(false));
}

export function* logoutSaga(action: any) {
  localStorage.removeItem("jwtAccessToken");
  yield put(setLogStatus(false));
}

export function* getUserInfoSaga() {
  const accessToken = localStorage.getItem("jwtAccessToken");

  const { status, data } = yield call(getUserInfoApi, "me", accessToken);

  if (status === 200) {
    yield put(setUsername(data.user.display_name));
    yield put(setEmail(data.user.email));
  }
}

export default function* authWatcher() {
  yield all([
    takeLatest(registerUser, registerUserSaga),
    takeLatest(loginUser, loginUserSaga),
    takeLatest(setLogout, logoutSaga),
    takeLatest(getUserInfo, getUserInfoSaga),
  ]);
}
