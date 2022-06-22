import {
  GET_ALL_TASKS_REQUEST,
  GET_ALL_TASKS_SUCCESS,
  UPDATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_REQUEST,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
} from "../constants";

const initialState = {
  allTasks: [],
  isLoading: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TASKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allTasks: action.payload,
      };
    case ADD_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        allTasks: state.allTasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
