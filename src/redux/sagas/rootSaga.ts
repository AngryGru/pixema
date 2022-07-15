import { all } from "redux-saga/effects";
import authWatcher from "./authSaga";
import movieWatcher from "./movieSaga";

export default function* rootSaga() {
  yield all([authWatcher(), movieWatcher()]);
}
