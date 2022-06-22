import { all, put, call, takeEvery } from "redux-saga/effects";
import { GET_USER_REQUEST } from "../constants";
import AuthService from "../../services/auth";

import { getUserSuccess } from "../actions/auth";

function* getUserTask(action) {
  const { payload: data } = action
  try {
    const response = yield call(AuthService.getUser, data);
    console.log('response', response)
    const users = response.data.results.data
    console.log('user', users);
    yield put(getUserSuccess(users));
  } catch (error) {
    console.log(error.response);
  }
}

export default function* watchGetUserTask() {
  yield all([takeEvery(GET_USER_REQUEST, getUserTask)])
}
