import React, { useState } from "react";
import { convertToSeconds } from "../../utils/time";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./index.css";
import UserDropdown from "./dropdown";
import { addTask } from './../../store/actions/tasks';
import './index.css'

const AddTaskForm = ({ handleShowAll, showAll }) => {
  const [taskData, setTaskData] = useState({
    description: "",
    date: "",
    time: "",
    assignedUser: "",
  });

  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleUser = (user) => {
    setTaskData({ ...taskData, assignedUser: user });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      is_completed: 0,
      task_msg: taskData.description,
      task_time: convertToSeconds(taskData.time),
      assigned_user: taskData.assignedUser,
      task_date: taskData.date,
      time_zone: convertToSeconds(taskData.time),
    };
    dispatch(addTask(payload));
  };
  return (
    <div>
      <form action="" className="bg-blue-100 bg-opacity-75 p-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="">Task Description</label>
          <input
            placeholder="type your description"
            className="border-2 border-gray-400 p-2 my-3 rounded-md"
            type="text"
            name="description"
            required
            value={taskData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex mb-4">
          <div className="flex flex-col">
            <label htmlFor="">Date</label>
            <input
              placeholder="22/06/2022"
              className="border-2 border-gray-400 p-2 my-3 rounded-md"
              type="date"
              name="date"
              required
              value={taskData.date}
              onChange={handleChange}
            />
          </div>

          <div className="flex ml-2 w-2/3 flex-col">
            <label htmlFor="">Time</label>
            <input
              className="border-2 border-gray-400 p-2 my-3 rounded-md"
              type="time"
              name="time"
              value={taskData.time}
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col mb-8">
          <UserDropdown handleUser={handleUser} assignedUser={taskData.assignedUser} />
        </div>
        <div className="flex mx-2 justify-end my-4">
          <button
            onClick={handleShowAll}
            className="ml-2 p-1 border-2 border-gray-400 bg-white rounded-sm w-1/4"
          >
            Cancel
          </button>
          <button
            className="ml-2 p-1 bg-green-500 rounded-sm w-1/4 text-white"
            onClick={handleSubmit}
          >
            {isLoading? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
