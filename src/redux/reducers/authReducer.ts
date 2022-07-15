import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterUser } from "../../common/types";

type AuthReducerStateType = {
  isLoggedIn: boolean;
  username: string;
  email: string;
  isAuthLoading: boolean;
};

const initialState = {
  isLoggedIn: !!localStorage.getItem("jwtAccessToken"),
  username: "",
  email: "",
  isAuthLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUser>) => {},
    setAuthLoading: (state, action) => {
      state.isAuthLoading = action.payload;
    },
    loginUser: (
      state: any,
      action: PayloadAction<{
        email: string;
        password: string;
        token_name: string;
      }>
    ) => {},
    setLogStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setLogout: (state, action) => {},
    getUserInfo: (state, action) => {},
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const {
  registerUser,
  loginUser,
  setLogStatus,
  setLogout,
  getUserInfo,
  setUsername,
  setEmail,
  setAuthLoading,
} = authSlice.actions;

export default authSlice.reducer;

export const AuthSelector = {
  getLogStatus: (state: any) => state.auth.isLoggedIn,
  getUsername: (state: any) => state.auth.username,
  getEmail: (state: any) => state.auth.email,
  getAuthLoading: (state: any) => state.auth.isAuthLoading,
};
