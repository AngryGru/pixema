import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovieList,
  loadWatchlistId,
  loadWatchlist,
  MovieSelector,
} from "../../redux/reducers/movieReducer";
import "./Home.scss";
import CardList from "../../components/CardList";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/thorHummer.json";
import Pagination from "../../components/Pagination";
import classNames from "classnames";
import EmptyState from "../../components/EmptyState";
import { FilterSelectors } from "../../redux/reducers/filterReducer";

const Home = ({ activePage }: any) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();

  const lastPage = useSelector(MovieSelector.getLastPage);
  const totalCount = useSelector(MovieSelector.getTotalCount);
  const pagesCount = Math.ceil(totalCount / 15);
  const [currentPage, setCurrentPage] = useState(1);
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
        : loadMovieList({ order, currentPage })
    );
    dispatch(loadWatchlistId("me"));
    dispatch(loadWatchlist(""));
  }, [activePage, order, currentPage, isFiltered]);

  const onNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  const onPrevClick = () => {
    setCurrentPage(currentPage - 1);
  };
  const onLastClick = () => setCurrentPage(lastPage);
  const onFirstClick = () => setCurrentPage(1);

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
        <CardList data={watchlist} isSaved={true} />
      ) : (
        <EmptyState />
      )}
      <div
        className={classNames("paginationContainer", {
          ["displayNone"]: searchResults.length != 0,
        })}
      >
        {(movieList.length !== 0 && activePage === "favorites") || (
          <Pagination
            pageNum={currentPage}
            pagesCount={pagesCount}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
            onFirstClick={onFirstClick}
            onLastClick={onLastClick}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
