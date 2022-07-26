import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  loadSingleMovie,
  MovieSelector,
  addToWatchlist,
  removeFromWatchlist,
  loadWatchlist,
} from "../../redux/reducers/movieReducer";
import "./MoviePage.scss";
import ButtonGroup from "../../components/ButtonGroup";
import IMDbIcon from "../../assets/icons/IMDbIcon";
import MovieSlider from "../../components/MovieSlider";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/thorHummer.json";
import { Theme } from "../../common/types";
import { useThemeContext } from "../../context/themeModeContext";

const MoviePage = () => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();

  const { id: cardId } = useParams();
  useEffect(() => {
    if (cardId) {
      dispatch(loadSingleMovie(cardId));
    }
  }, [cardId]);

  const movieData = useSelector(MovieSelector.getSingleMovie);
  const movieCrew = useSelector(MovieSelector.getMovieCrew);

  const singleMovieLoading = useSelector(MovieSelector.getSingleMovieLoading);

  const watchlist = useSelector(MovieSelector.getWatchlist);
  let isMovieSaved = Boolean(
    watchlist.find((item: any) => Number(item.id) === Number(cardId))
  );

  const onSaveClick = (data: any) => {
    if (isMovieSaved) {
      dispatch(removeFromWatchlist(data));
      dispatch(loadWatchlist(""));
    } else {
      dispatch(addToWatchlist(data));
      dispatch(loadWatchlist(""));
    }
  };

  return (
    <div className="moviePageWrapper">
      {singleMovieLoading ? (
        <Lottie options={defaultOptions} height={400} width={500} />
      ) : (
        movieData && (
          <div
            className={classNames("moviePageContainer", {
              ["moviePageContainerLight"]: !isDarkTheme,
            })}
          >
            <div className="posterContainer">
              <div className="poster">
                <img src={movieData!.poster} alt="movie poster" />
              </div>
              <ButtonGroup
                isSaveBtnActive={isMovieSaved}
                onSaveClick={() =>
                  onSaveClick({ itemId: movieData.id, itemType: "title" })
                }
              />
            </div>
            <div className="infoContainer">
              {movieData!.genres && (
                <div className="genres">
                  {movieData!.genres
                    .map((item: any) => {
                      return item.display_name;
                    })
                    .join(" · ")}
                </div>
              )}
              <div className="title">{movieData!.name}</div>
              {movieData!.rating && (
                <div className="raitingsContainer">
                  <div
                    className={classNames("raiting", "pixemaRate", {
                      ["highRaiting"]: +movieData!.rating >= 7,
                      ["midRaiting"]:
                        +movieData!.rating >= 4 && +movieData!.rating < 7,
                      ["lowRaiting"]: +movieData!.rating < 4,
                    })}
                  >
                    {movieData!.rating}
                  </div>
                  <div className="imdbRate">
                    <IMDbIcon />
                    <span>{movieData!.rating}</span>
                  </div>
                  <div className="runtime">{movieData!.runtime} min</div>
                </div>
              )}
              <p className="description">{movieData!.description}</p>
              <div className="table">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="item">Year</td>
                      <td className="value">{movieData!.year}</td>
                    </tr>
                    <tr>
                      <td className="item">Released</td>
                      <td className="value">
                        {movieData!.release_date.split("T").slice(0, 1)}
                      </td>
                    </tr>
                    {movieData!.budget && (
                      <tr>
                        <td className="item">BoxOffice</td>
                        <td className="value">$ {movieData!.budget}</td>
                      </tr>
                    )}
                    <tr>
                      <td className="item">Actors</td>
                      <td className="value">
                        {movieCrew!
                          .cast!.map((person: any) => `${person.name}`)
                          .join(", ")}
                      </td>
                    </tr>
                    {movieCrew!.directing!.length !== 0 && (
                      <tr>
                        <td className="item">Director</td>
                        <td className="value">
                          {movieCrew!
                            .directing!.map((p: any) => `${p.name}`)
                            .join(", ")}
                        </td>
                      </tr>
                    )}
                    {movieCrew!.writing!.length !== 0 && (
                      <tr>
                        <td className="item">Writers</td>
                        <td className="value">
                          {movieCrew!
                            .writing!.map((p: any) => `${p.name}`)
                            .join(", ")}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="sliderWrapper">
                <MovieSlider />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MoviePage;
