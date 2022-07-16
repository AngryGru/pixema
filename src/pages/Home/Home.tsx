import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovieList,
  loadTrendsList,
  MovieSelector,
} from "../../redux/reducers/movieReducer";
import "./Home.scss";
import CardList from "../../components/CardList";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/thorHummer.json";
import Pagination from "../../components/Pagination";
import classNames from "classnames";

const Home = ({ isTrends }: any) => {
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

  ///////////////////   PAGINATION     ////////////////////
  const totalCount = useSelector(MovieSelector.getTotalCount);
  const pagesCount = Math.ceil(totalCount / 15);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      isTrends ? loadTrendsList(currentPage) : loadMovieList(currentPage)
    );
  }, [isTrends, currentPage, currentPage]);

  const onNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  const onPrevClick = () => {
    setCurrentPage(currentPage - 1);
  };
  const onLastClick = () => setCurrentPage(lastPage);
  const onFirstClick = () => setCurrentPage(1);
  ///////////////////   PAGINATION     ////////////////////

  const movieList = useSelector(MovieSelector.getMovieList);
  const trendsList = useSelector(MovieSelector.getTrendsList);

  const searchResults = useSelector(MovieSelector.getSearchResults);
  const isPageLoading = useSelector(MovieSelector.getPageLoading);

  return (
    <div className="homeContainer">
      {isPageLoading ? (
        <Lottie options={defaultOptions} height={400} width={500} />
      ) : searchResults.length != 0 ? (
        <CardList data={searchResults} />
      ) : isTrends ? (
        <CardList data={trendsList} isTrends={true} />
      ) : (
        <CardList data={movieList} />
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
