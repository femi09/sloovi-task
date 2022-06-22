import { all } from "redux-saga/effects";
import authSaga from "./auth";
import userSaga from "./user";
import taskSaga from "./task";

function* rootSaga() {
  yield all([authSaga(), userSaga(), taskSaga()]);
}

export default rootSaga;
