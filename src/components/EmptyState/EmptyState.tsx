import React from "react";
import "./EmptyState.scss";
import EmptyStateIcon from "../../assets/icons/EmptyStateIcon";

const EmptyState = ({ message }: any) => {
  return (
    <div className="emptyStateContainer">
      <EmptyStateIcon />
      <div className="emptyStateMessage">
        {message ? message : "No favorites, yet."}
      </div>
    </div>
  );
};

export default EmptyState;
