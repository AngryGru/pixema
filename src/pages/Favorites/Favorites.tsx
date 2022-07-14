import React from "react";
import "./Favorites.scss";
import EmptyState from "../../components/EmptyState";

const Favorites = () => {
  return (
    <div className="favoritesContainer">
      <EmptyState />
    </div>
  );
};

export default Favorites;
