import { all, takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getMovieListApi,
  getSingleMovieApi,
  getRelatedMovieListApi,
  getSearchResultsApi,
  getTrendsListApi,
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
  loadTrendsList,
  setTrendsList,
  setTotalCount,
  setLastPage,
} from "../reducers/movieReducer";

function* getMovieListSaga(action: any) {
  yield put(setPageLoading(true));
  const accessToken = localStorage.getItem("jwtAccessToken");
  const { status, data } = yield call(
    getMovieListApi,
    accessToken,
    action.payload
  );
  if (status === 200) {
    console.log("MOVIE DATA", data);
    yield put(setMovieList(data.pagination.data));
    yield put(setTotalCount(data.pagination.total));
    yield put(setLastPage(data.pagination.last_page));
  }
  yield put(setPageLoading(false));
}

function* getTrendsListSaga(action: any) {
  yield put(setPageLoading(true));
  const accessToken = localStorage.getItem("jwtAccessToken");

  const { status, data } = yield call(
    getTrendsListApi,
    accessToken,
    action.payload
  );

  if (status === 200) {
    console.log("TRENDS DATA", data);
    yield put(setTrendsList(data.pagination.data));
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
    console.log(data.title);

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

export default function* movieWatcher() {
  yield all([
    takeLatest(loadMovieList, getMovieListSaga),
    takeLatest(loadSingleMovie, getSingleMovieSaga),
    takeLatest(loadRelatedMovieList, getRelatedMovieListSaga),
    takeLatest(loadSearchResults, getSearchResultsSaga),
    takeLatest(loadTrendsList, getTrendsListSaga),
  ]);
}
