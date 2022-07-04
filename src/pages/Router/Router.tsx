import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import Settings from "../Settings";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<PageWrapper />}>
          <Route path="settings" element={<Settings />} />
          {/* 
          <Route path="cards-list" element={<Posts isPersonal={false} />} />
          <Route path="my-posts" element={<Posts isPersonal />} />
          <Route path="cards-list/:id" element={<Post />} />
          <Route path="info" element={<Information />} />
          <Route path="add-post" element={<AddPostForm />} /> */}
          {/* <Route path="*" element={<Navigate to={"/cards-list"} replace />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
