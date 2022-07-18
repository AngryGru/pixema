import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovieList,
  MovieSelector,
} from "../../redux/reducers/movieReducer";
import "./Home.scss";
import CardList from "../../components/CardList";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/thorHummer.json";
import Pagination from "../../components/Pagination";
import classNames from "classnames";
import EmptyState from "../../components/EmptyState";

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

  useEffect(() => {
    dispatch(loadMovieList({ order, currentPage }));
  }, [activePage, order, currentPage]);

  const onNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  const onPrevClick = () => {
    setCurrentPage(currentPage - 1);
  };
  const onLastClick = () => setCurrentPage(lastPage);
  const onFirstClick = () => setCurrentPage(1);

  const movieList = useSelector(MovieSelector.getMovieList);
  const favoritesList = useSelector(MovieSelector.getFavoritesList);

  const searchResults = useSelector(MovieSelector.getSearchResults);
  const isPageLoading = useSelector(MovieSelector.getPageLoading);

  return (
    <div className="homeContainer">
      {isPageLoading ? (
        <Lottie options={defaultOptions} height={400} width={500} />
      ) : activePage === "home" ? (
        <CardList
          data={searchResults.length != 0 ? searchResults : movieList}
          isTrends={false}
        />
      ) : activePage === "trends" ? (
        <CardList
          data={searchResults.length != 0 ? searchResults : movieList}
          isTrends={true}
        />
      ) : favoritesList.length != 0 ? (
        <CardList data={favoritesList} />
      ) : (
        <EmptyState />
      )}
      <div
        className={classNames("paginationContainer", {
          ["displayNone"]: searchResults.length != 0,
        })}
      >
        <Pagination
          pageNum={currentPage}
          pagesCount={pagesCount}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
          onFirstClick={onFirstClick}
          onLastClick={onLastClick}
        />
      </div>
    </div>
  );
};

export default Home;
