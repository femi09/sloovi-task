import {
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  GET_ALL_TASKS_REQUEST,
  GET_ALL_TASKS_SUCCESS,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
} from "../constants";
export const addTask = (payload) => {
  return { type: ADD_TASK_REQUEST, payload };
};

export const addTaskSuccess = (payload) => {
  return { type: ADD_TASK_SUCCESS, payload };
};

export const getAllTasks = (payload) => {
  return { type: GET_ALL_TASKS_REQUEST, payload };
};

export const getAllTasksSuccess = (payload) => {
  return { type: GET_ALL_TASKS_SUCCESS, payload };
};

export const getTask = (payload) => {
  return { type: GET_TASK_REQUEST, payload };
};

export const getTaskSuccess = (payload) => {
  return { type: GET_TASK_SUCCESS, payload };
};

export const updateTask = (payload) => {
  return { type: UPDATE_TASK_REQUEST, payload };
};

export const updateTaskSuccess = (payload) => {
  return { type: UPDATE_TASK_SUCCESS, payload };
};

export const deleteTask = (payload) => {
  return { type: DELETE_TASK_REQUEST, payload };
};

export const deleteTaskSuccess = (payload) => {
  return { type: DELETE_TASK_SUCCESS, payload };
};
