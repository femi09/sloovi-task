import { all, put, call, takeEvery } from "redux-saga/effects";
import {
  DELETE_TASK_REQUEST,
  GET_ALL_TASKS_REQUEST,
  UPDATE_TASK_REQUEST,
} from "../constants";
import TasksService from "../../services/task";
import {
  getAllTasksSuccess,
  deleteTaskSuccess,
  addTaskSuccess,
  updateTaskSuccess,
} from "../actions/tasks";
import { ADD_TASK_REQUEST } from "./../constants/index";

function* getAllTasks(action) {
  const { payload } = action;
  try {
    const response = yield call(TasksService.getAllTasks, payload);
    const tasks = response.data.results;
    console.log(response)
    yield put(getAllTasksSuccess(tasks));
  } catch (error) {
    console.log(error.response);
  }
}

function* addTask(action) {
  const { payload } = action;
  try {
    const response = yield call(TasksService.addTask, payload);
    if (response && response.data) {
      yield put(addTaskSuccess());
        window.location.reload();
    }
  } catch (error) {
    console.log(error.response);
  }
}

function* updateTask(action) {
  const { payload } = action;

  const newPayload = {
    assigned_user: payload.assigned_user,
    task_date: payload.task_date,
    task_time: payload.task_time,
    is_completed: payload.is_completed,
    time_zone: payload.time_zone,
    task_msg: payload.task_msg,
  };
  try {
    const response = yield call(
      TasksService.updateTask,
      payload.id,
      newPayload
    );
    if (response && response.data) {
      yield put(updateTaskSuccess());
      window.location.reload();
    }
  } catch (error) {
    console.log(error.response);
  }
}

function* deleteTask(action) {
  const { payload } = action;
  try {
    const response = yield call(TasksService.deleteTask, payload);
    if (response && response.data) {
      yield put(deleteTaskSuccess(payload));
        window.location.reload();
    }
  } catch (error) {
    console.log(error.response);
  }
}

export default function* watchGetAllTasks() {
  yield all([
    takeEvery(GET_ALL_TASKS_REQUEST, getAllTasks),
    takeEvery(ADD_TASK_REQUEST, addTask),
    takeEvery(UPDATE_TASK_REQUEST, updateTask),
    takeEvery(DELETE_TASK_REQUEST, deleteTask),
  ]);
}
