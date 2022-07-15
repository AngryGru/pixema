import { all, takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getMovieListApi,
  getSingleMovieApi,
  getRelatedMovieListApi,
  getSearchResultsApi,
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
} from "../reducers/movieReducer";

function* getMovieListSaga() {
  yield put(setPageLoading(true));
  const accessToken = localStorage.getItem("jwtAccessToken");
  const { status, data, problem } = yield call(getMovieListApi, accessToken);
  if (status === 200) {
    yield put(setMovieList(data.pagination.data));
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
  const accessToken = localStorage.getItem("jwtAccessToken");
  yield put(setSearchResults(""));

  const { status, data } = yield call(
    getSearchResultsApi,
    action.payload,
    accessToken
  );

  if (status === 200) {
    console.log("SAGA RESULTS", data.results);
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
  ]);
}
