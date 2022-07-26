// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
// import { AuthSelector, getUserInfo } from "../../redux/reducers/authReducer";

// import PageWrapper from "../../components/PageWrapper";
// import Settings from "../Settings";
// import Favorites from "../Favorites";
// import Home from "../Home";
// import MoviePage from "../MoviePage";
// import Authorization from "../Authorization";
// import LoginForm from "../Authorization/LoginForm";
// import RegistrationForm from "../Authorization/RegistrationForm";

// const Router = () => {
//   const isLoggedIn = useSelector(AuthSelector.getLogStatus);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (isLoggedIn) {
//       dispatch(getUserInfo(""));
//     }
//   }, [isLoggedIn]);

//   return (
//     <BrowserRouter>
//       {isLoggedIn ? (
//         <Routes>
//           <Route
//             path="/home"
//             element={
//               <PageWrapper>
//                 <Home isTrends={false} />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/trends"
//             element={
//               <PageWrapper>
//                 <Home isTrends />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/cards-list/:id"
//             element={
//               <PageWrapper>
//                 <MoviePage />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/favorites"
//             element={
//               <PageWrapper>
//                 <Favorites />
//               </PageWrapper>
//             }
//           />
//           <Route
//             path="/settings"
//             element={
//               <PageWrapper>
//                 <Settings />
//               </PageWrapper>
//             }
//           />
//           <Route path="*" element={<Navigate to={"/home"} replace />} />
//         </Routes>
//       ) : (
//         <Routes>
//           <Route
//             path={"/login"}
//             element={
//               <Authorization>
//                 <LoginForm />
//               </Authorization>
//             }
//           />
//           <Route
//             path={"/registration"}
//             element={
//               <Authorization>
//                 <RegistrationForm />
//               </Authorization>
//             }
//           />
//           <Route path="*" element={<Navigate to={"/login"} replace />} />
//         </Routes>
//       )}
//     </BrowserRouter>
//   );
// };

// export default Router;
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { AuthSelector, getUserInfo } from "../../redux/reducers/authReducer";

import PageWrapper from "../../components/PageWrapper";
import Settings from "../Settings";
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
          <Route
            path="/home"
            element={
              <PageWrapper>
                <Home activePage={"home"} />
              </PageWrapper>
            }
          />
          <Route
            path="/trends"
            element={
              <PageWrapper>
                <Home activePage={"trends"} />
              </PageWrapper>
            }
          />
          <Route
            path="/cards-list/:id"
            element={
              <PageWrapper>
                <MoviePage />
              </PageWrapper>
            }
          />
          <Route
            path="/favorites"
            element={
              <PageWrapper>
                <Home activePage={"favorites"} />
              </PageWrapper>
            }
          />
          <Route
            path="/settings"
            element={
              <PageWrapper>
                <Settings />
              </PageWrapper>
            }
          />
          <Route path="*" element={<Navigate to={"/home"} replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path={"/login"}
            element={
              <Authorization>
                <LoginForm />
              </Authorization>
            }
          />
          <Route
            path={"/registration"}
            element={
              <Authorization>
                <RegistrationForm />
              </Authorization>
            }
          />
          <Route path="*" element={<Navigate to={"/login"} replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
