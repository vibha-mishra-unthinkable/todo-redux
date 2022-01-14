import React from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import Header from "./Header";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";

const Todo = () => {
  const todoList = useSelector((state) => {
    return state.taskReducer.tasks;
  });
  return (
    <div className="App">
      <Header />
      <TodoInput />
      {todoList.length > 0 ? (
        <TodoList />
      ) : (
        <h1 className="noTask">No task </h1>
      )}
    </div>
  );
};

export default Todo;
