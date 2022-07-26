import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovieList,
  loadWatchlistId,
  loadWatchlist,
  MovieSelector,
  setCurrentPage,
} from "../../redux/reducers/movieReducer";
import "./Home.scss";
import CardList from "../../components/CardList";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/thorHummer.json";
import classNames from "classnames";
import EmptyState from "../../components/EmptyState";
import { FilterSelectors } from "../../redux/reducers/filterReducer";
import { Theme } from "../../common/types";
import { useThemeContext } from "../../context/themeModeContext";

const Home = ({ activePage }: any) => {
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

  const totalCount = useSelector(MovieSelector.getTotalCount);
  const currentPage = useSelector(MovieSelector.getCurrentPage);
  const [showMoreStatus, setShowMoreStatus] = useState(false);
  const order = activePage === "home" ? "popularity:desc" : "revenue:desc";

  const isFiltered = useSelector(FilterSelectors.getFilterStatus);

  const genre = useSelector(FilterSelectors.getFiltersGenres);
  const country = useSelector(FilterSelectors.getFiltersCountry);
  const type = useSelector(FilterSelectors.getFiltersType);
  const years = useSelector(FilterSelectors.getReleased);
  const ratings = useSelector(FilterSelectors.getScore);
  const released = Object.values(years).join();
  const score = Object.values(ratings).join();

  useEffect(() => {
    dispatch(
      isFiltered
        ? loadMovieList({ type, genre, country, released, score })
        : loadMovieList({ order, currentPage, showMoreStatus })
    );
    dispatch(loadWatchlistId("me"));
    dispatch(loadWatchlist(""));
  }, [activePage, order, currentPage, isFiltered]);

  const onShowMoreClick = () => {
    setShowMoreStatus(true);
    dispatch(setCurrentPage(currentPage + 1));
  };

  const movieList = useSelector(MovieSelector.getMovieList);
  const watchlist = useSelector(MovieSelector.getWatchlist);

  const searchResults = useSelector(MovieSelector.getSearchResults);
  const isPageLoading = useSelector(MovieSelector.getPageLoading);

  return (
    <div className="homeContainer">
      {isPageLoading ? (
        <Lottie options={defaultOptions} height={400} width={500} />
      ) : activePage === "home" ? (
        movieList.length === 0 ? (
          <EmptyState message={"Oops... Maybe another time, lovely muffin."} />
        ) : (
          <CardList
            data={searchResults.length != 0 ? searchResults : movieList}
            isTrends={false}
          />
        )
      ) : activePage === "trends" ? (
        movieList.length === 0 ? (
          <EmptyState message={"Oops... Maybe another time, lovely muffin."} />
        ) : (
          <CardList
            data={searchResults.length != 0 ? searchResults : movieList}
            isTrends={true}
          />
        )
      ) : activePage === "favorites" ? (
        <CardList
          data={searchResults.length != 0 ? searchResults : watchlist}
          isSaved={true}
        />
      ) : (
        <EmptyState />
      )}
      {isPageLoading || (
        <div
          className={classNames("showMoreBtnContainer", {
            ["displayNone"]: searchResults.length != 0,
          })}
        >
          {(movieList.length !== 0 && activePage === "favorites") ||
            (movieList.length < totalCount && (
              <button
                className={classNames("showMoreBtn", {
                  ["showMoreBtnLight"]: !isDarkTheme,
                })}
                onClick={onShowMoreClick}
              >
                Show more
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
