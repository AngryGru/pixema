import { all, takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getMovieListApi,
  getSingleMovieApi,
  getRelatedMovieListApi,
  getSearchResultsApi,
  getWatchlistIdApi,
  getWatchlistApi,
  addToWatchlistApi,
  removeFromWatchlistApi,
} from "../api";
import {
  loadMovieList,
  setMovieList,
  loadSingleMovie,
  setSingleMovie,
  setMovieCrew,
  setSingleMovieLoading,
  loadRelatedMovieList,
  setRelatedMovieList,
  loadSearchResults,
  setSearchResults,
  setPageLoading,
  setTotalCount,
  loadWatchlistId,
  addToWatchlist,
  removeFromWatchlist,
  loadWatchlist,
  setWatchlist,
  setWatchlistId,
  setMoreMovies,
} from "../reducers/movieReducer";

function* getMovieListSaga(action: any) {
  yield put(setPageLoading(true));
  const accessToken = localStorage.getItem("jwtAccessToken");

  const {
    order,
    currentPage,
    type,
    genre,
    country,
    released,
    score,
    showMoreStatus,
  } = action.payload;

  const { status, data } = yield call(
    getMovieListApi,
    accessToken,
    order,
    currentPage,
    type,
    genre,
    country,
    released,
    score
  );
  if (status === 200) {
    yield put(
      showMoreStatus
        ? setMoreMovies(data.pagination.data)
        : setMovieList(data.pagination.data)
    );
    yield put(setTotalCount(data.pagination.total));
  }
  yield put(setPageLoading(false));
}

function* getSingleMovieSaga(action: PayloadAction<string>) {
  yield put(setSingleMovieLoading(true));
  yield put(setSingleMovie(null));
  yield put(setMovieCrew(null));

  const accessToken = localStorage.getItem("jwtAccessToken");
  const { status, data, problem } = yield call(
    getSingleMovieApi,
    action.payload,
    accessToken
  );

  if (status === 200) {
    yield put(setSingleMovie(data.title));

    const movieCrewFilter = (types: string[]) => {
      return types.reduce((object: any, type: any) => {
        if (!object.hasOwnProperty(type)) {
          object[type] = data.title.credits.filter(
            (item: any) => item.pivot.department === type
          );
        }
        return object;
      }, {});
    };

    const movieCrew = movieCrewFilter(["directing", "writing", "cast"]);
    yield put(setMovieCrew(movieCrew));
  }

  yield put(setSingleMovieLoading(false));
}

function* getRelatedMovieListSaga(action: PayloadAction<string>) {
  yield put(setPageLoading(true));
  const accessToken = localStorage.getItem("jwtAccessToken");
  const { status, data, problem } = yield call(
    getRelatedMovieListApi,
    action.payload,
    accessToken
  );

  if (status === 200) {
    yield put(setRelatedMovieList(data.titles));
  }
  yield put(setPageLoading(false));
}

function* getSearchResultsSaga(action: any) {
  yield put(setPageLoading(true));
  yield put(setSearchResults([]));
  const accessToken = localStorage.getItem("jwtAccessToken");

  const { status, data } = yield call(
    getSearchResultsApi,
    action.payload,
    accessToken
  );

  if (status === 200) {
    yield put(setSearchResults(data.results));
  }
  yield put(setPageLoading(false));
}

function* getWatchListIdSaga(action: any) {
  const accessToken = localStorage.getItem("jwtAccessToken");

  const { status, data } = yield call(
    getWatchlistIdApi,
    action.payload,
    accessToken
  );
  if (status === 200) {
    const watchlistId = data.pagination.data.map((item: any) => {
      if (item.name === "watchlist") {
        return item.id;
      }
    });
    console.log(watchlistId);
    localStorage.setItem("watchlistId", watchlistId);
    yield put(setWatchlistId(watchlistId));
  }
}

function* getWatchListSaga(action: any) {
  yield put(setPageLoading(true));
  yield put(setWatchlist([]));
  const accessToken = localStorage.getItem("jwtAccessToken");
  const watchlistId = localStorage.getItem("watchlistId");

  const { status, data } = yield call(
    getWatchlistApi,
    accessToken,
    watchlistId
  );

  if (status === 200) {
    console.log(data.items.data);
    yield put(setWatchlist(data.items.data));
  }
  yield put(setPageLoading(false));
}

function* addToWatchListSaga(action: any) {
  const accessToken = localStorage.getItem("jwtAccessToken");
  const watchlistId = localStorage.getItem("watchlistId");
  yield call(addToWatchlistApi, action.payload, accessToken, watchlistId);
}

function* removeFromWatchListSaga(action: any) {
  const accessToken = localStorage.getItem("jwtAccessToken");
  const watchlistId = localStorage.getItem("watchlistId");
  yield call(removeFromWatchlistApi, action.payload, accessToken, watchlistId);
}

export default function* movieWatcher() {
  yield all([
    takeLatest(loadMovieList, getMovieListSaga),
    takeLatest(loadSingleMovie, getSingleMovieSaga),
    takeLatest(loadRelatedMovieList, getRelatedMovieListSaga),
    takeLatest(loadSearchResults, getSearchResultsSaga),
    takeLatest(loadWatchlistId, getWatchListIdSaga),
    takeLatest(loadWatchlist, getWatchListSaga),
    takeLatest(addToWatchlist, addToWatchListSaga),
    takeLatest(removeFromWatchlist, removeFromWatchListSaga),
  ]);
}
