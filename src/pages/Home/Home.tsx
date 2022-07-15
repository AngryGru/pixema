import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovieList,
  MovieSelector,
} from "../../redux/reducers/movieReducer";
import "./Home.scss";
import CardList from "../../components/CardList";
import Lottie from "react-lottie";
import animationData from "../../components/Lotties/thorHummer.json";

const Home = () => {
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
    dispatch(loadMovieList(""));
  }, []);

  const movieList = useSelector(MovieSelector.getMovieList);

  const searchResults = useSelector(MovieSelector.getSearchResults);
  console.log("PAGE RESULTS", searchResults);

  const isPageLoading = useSelector(MovieSelector.getPageLoading);

  return (
    <div className="homeContainer">
      {isPageLoading ? (
        <Lottie options={defaultOptions} height={400} width={500} />
      ) : searchResults.length != 0 ? (
        <CardList data={searchResults} />
      ) : (
        <CardList data={movieList} />
      )}
    </div>
  );
};

export default Home;
