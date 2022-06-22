import React from "react";

const Task = ({ task, handleEdit, handleDelete }) => {
  return (
    <div className="flex px-4 border-2 justify-between items-start">
      <div className="my-4">
        <p className="my-2 font-bold text-lg">{task.task_msg}</p>
        <p>{task.task_date}</p>
      </div>

      <div className="flex items-center my-4">
        <img
          onClick={() => handleEdit(task.id)}
          src="/edit-icon.png"
          className="w-6 h-6 mx-4 cursor-pointer"
          alt=""
        />
        <img onClick={() => handleDelete(task.id)} src="/delete-icon.png" className="w-6 h-6 cursor-pointer" alt="" />
      </div>
    </div>
  );
};

export default Task;
