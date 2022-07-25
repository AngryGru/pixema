import React, { FC } from "react";
import classNames from "classnames";
import "./Card.scss";
import { MovieCardType } from "../../common/types";
import FireIcon from "../../assets/icons/FireIcon";
import { Theme } from "../../common/types";
import { useThemeContext } from "../../context/themeModeContext";
import SaveIcon from "../../assets/icons/SaveIcon";

const Card: FC<MovieCardType> = ({
  poster,
  name,
  tagline,
  rating,
  isTrends,
  onClick,
  isSaved,
}) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  return (
    <div
      className={classNames("cardContainer", {
        ["cardContainerLight"]: !isDarkTheme,
      })}
      onClick={onClick}
    >
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
          {isSaved && (
            <div className={classNames("savedIcon")}>
              <SaveIcon width={"20"} height={"20"} isActive={true} />
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
