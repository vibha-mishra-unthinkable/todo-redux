import React, { useState } from "react";
import "./App.css";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { saveTask } from "./redux/actions/index";
const TodoInput = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput) {
      dispatch(saveTask(userInput));
      setUserInput("");
    }
  };
  return (
    <div className="todoInput">
      <form onSubmit={handleSubmit}>
        <label>Enter Text: </label>
        <input
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          className="inputField"
        />
        <Button type="submit" title="Add+" className="submitButton" />
      </form>
    </div>
  );
};

export default TodoInput;
