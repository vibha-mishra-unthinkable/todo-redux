import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => {
    return state.taskReducer.tasks;
  });
  return (
    <>
      {todoList.map((todo) => {
        return <Task todo={todo} key={todo.id} />;
      })}
    </>
  );
};

export default TodoList;
