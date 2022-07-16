import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { AuthSelector, getUserInfo } from "../../redux/reducers/authReducer";

import PageWrapper from "../../components/PageWrapper";
import Settings from "../Settings";
import Favorites from "../Favorites";
import Home from "../Home";
import MoviePage from "../MoviePage";
import Authorization from "../Authorization";
import LoginForm from "../Authorization/LoginForm";
import RegistrationForm from "../Authorization/RegistrationForm";

const Router = () => {
  const isLoggedIn = useSelector(AuthSelector.getLogStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo(""));
    }
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<PageWrapper />}>
            <Route path="home" element={<Home isTrends={false} />} />
            <Route path="trends" element={<Home isTrends />} />
            <Route path="cards-list/:id" element={<MoviePage />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to={"/home"} replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"/"} element={<Authorization />}>
            <Route path={"login"} element={<LoginForm />} />
            <Route path={"registration"} element={<RegistrationForm />} />
          </Route>
          <Route path="*" element={<Navigate to={"/login"} replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
