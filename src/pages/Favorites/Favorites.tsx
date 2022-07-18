import React, { useState } from "react";
import "./Favorites.scss";
import EmptyState from "../../components/EmptyState";
import { useDispatch } from "react-redux";
import LabelItem from "../Settings/LabelItem";

const Favorites = () => {
  return (
    <div className="favoritesContainer">
      <EmptyState />
    </div>
  );
};

export default Favorites;
