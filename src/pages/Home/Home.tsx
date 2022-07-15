import React, { FC, useEffect } from "react";
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

  useEffect(() => {
    dispatch(isTrends ? loadTrendsList("") : loadMovieList(""));
  }, [isTrends]);

  const movieList = useSelector(MovieSelector.getMovieList);
  const trendsList = useSelector(MovieSelector.getTrendsList);
  console.log("pageTRENDS", trendsList);

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
    </div>
  );
};

export default Home;
