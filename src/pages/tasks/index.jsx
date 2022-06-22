import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import AllTasks from "./all-task";
import { getAllTasks } from "../../store/actions/tasks";
import AddTaskForm from "../../components/task/add-task-form";
import UpdateTaskForm from "./../../components/task/update-task-form";
import { deleteTask } from "./../../store/actions/tasks";

const Tasks = () => {
  const [showAll, setShowAll] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const dispatch = useDispatch();
  const companyId = "company_413ef22b6237417fb1fba7917f0f69e7";
  const { allTasks } = useSelector((state) => state.tasks);
  const { users } = useSelector((state) => state.auth);
  const [task, setTask] = useState({});


  useEffect(() => {
    dispatch(getAllTasks(companyId));
  }, [dispatch]);

  const handleShowAddForm = () => {
    setShowAddForm(true);
    setShowAll(false);
    setShowUpdateForm(false);
  };

  const handleShowAll = () => {
    setShowAddForm(false);
    setShowAll(true);
    setShowUpdateForm(false);
  };

  const handleShowUpdateForm = () => {
    setShowAddForm(false);
    setShowAll(false);
    setShowUpdateForm(true);
  };

  const handleEdit = (id) => {
    handleShowUpdateForm();
    const task = allTasks.find((task) => task.id === id);
    setTask(task);
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-1/3 mx-8 my-24">
      <div className="flex bg-gray-100 bg-opacity-25 font-semibold justify-between items-center border-2 px-1">
        <div className="py-2 mx-2 ">
          TASKS {allTasks.length > 0 ? allTasks.length : 0}
        </div>
        {showAll && (
          <div
            onClick={handleShowAddForm}
            className="px-2 cursor-pointer py-1 border-l-2 text-2xl"
          >
            +
          </div>
        )}
      </div>
      <div>
        {showAll && <AllTasks allTasks={allTasks} handleEdit={handleEdit} handleDelete={handleDelete} />}
        {showAddForm && (
          <AddTaskForm showAll={showAll} handleShowAll={handleShowAll} />
        )}
        {showUpdateForm && (
          <UpdateTaskForm
            task={task}
            handleShowAll={handleShowAll}
            users={users}
          />
        )}
      </div>
    </div>
  );
};

export default Tasks;
