import React, { FC } from "react";
import classNames from "classnames";
import "./Card.scss";
import { MovieCardType } from "../../common/types";
import FireIcon from "../../assets/icons/FireIcon";
import { Theme } from "../../common/types";
import { ThemeModeProvider } from "../../context/ThemeModeProvider";
import { useThemeContext } from "../../context/themeModeContext";

const Card: FC<MovieCardType> = ({
  poster,
  name,
  tagline,
  rating,
  isTrends,
  onClick,
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
