import React from "react";
import Task from "../../components/task/task";
import { useSelector } from "react-redux";

const AllTasks = ({ allTasks, handleEdit, handleDelete }) => {
  const { isLoading } = useSelector((state) => state.tasks);
  return (
    <div>
        {!isLoading && allTasks.length === 0 && (
        <div className="text-center font-sembold text-lg py-4 border-2">
          No Available Tasks
        </div>
      )}

      {isLoading ? (
        <div className="text-center font-sembold text-lg py-4 border-2">Fetching Tasks...</div>
      ) : (
        allTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default AllTasks;
