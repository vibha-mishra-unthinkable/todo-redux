import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { deleteTask } from "./redux/actions";

const Task = (props) => {
  const { id, task } = props.todo;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={() => handleDelete(id)} className="deleteButton">
        X
      </button>
    </div>
  );
};

export default Task;
