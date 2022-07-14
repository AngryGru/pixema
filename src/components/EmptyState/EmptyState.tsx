import React from "react";
import "./EmptyState.scss";
import EmptyStateIcon from "../../assets/icons/EmptyStateIcon";

const EmptyState = () => {
  return (
    <div className="emptyStateContainer">
      <EmptyStateIcon />
      <div className="emptyStateMessage">No favorites, yet.</div>
    </div>
  );
};

export default EmptyState;
