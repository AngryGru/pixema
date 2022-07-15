import React, { FC } from "react";
import classNames from "classnames";
import "./Card.scss";
import { MovieCardType } from "../../common/types";
import FireIcon from "../../assets/icons/FireIcon";

const Card: FC<MovieCardType> = ({
  poster,
  name,
  tagline,
  rating,
  isTrends,
  onClick,
}) => {
  return (
    <div className="cardContainer" onClick={onClick}>
      <div className="cardContent">
        <div className="cardPoster">
          {rating && (
            <div
              id={isTrends ? "trendRaiting" : "rate"}
              className={classNames("raiting", {
                ["highRaiting"]: +rating >= 7,
                ["midRaiting"]: +rating >= 4 && +rating < 7,
                ["lowRaiting"]: +rating < 4,
              })}
            >
              {isTrends && <FireIcon />}
              {rating}
            </div>
          )}

          <img src={poster} alt="movie poster" />
        </div>
        <div className="cardText">
          <p className="cardTitle">{name}</p>
          <p className="cardDescription">{tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
