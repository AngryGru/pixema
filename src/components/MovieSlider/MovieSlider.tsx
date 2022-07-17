import React, { useEffect } from "react";
import "./MovieSlider.scss";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";
import {
  loadRelatedMovieList,
  loadSingleMovie,
  MovieSelector,
} from "../../redux/reducers/movieReducer";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { Theme } from "../../common/types";
import { useThemeContext } from "../../context/themeModeContext";

const MovieSlider = (data: any) => {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === Theme.Dark;

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(loadRelatedMovieList(id));
    }
  }, [id]);

  const relatedMovie = useSelector(MovieSelector.getRelatedMovieList);

  const onClick = (cardId: number) => {
    console.log("CLICK");
    dispatch(loadSingleMovie(cardId));
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={classNames("sliderContainer", {
        ["sliderContainerLight"]: !isDarkTheme,
      })}
    >
      {relatedMovie.length !== 0 && (
        <div>
          <div className="sliderTitle"> Recommendations </div>
          <Slider {...settings}>
            {relatedMovie.map((item: any) => {
              return (
                <Card
                  id={item.id}
                  key={item.id}
                  poster={item.poster}
                  name={item.name}
                  tagline={item.tagline}
                  rating={item.rating}
                  onClick={() => onClick(item.id)}
                />
              );
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default MovieSlider;
