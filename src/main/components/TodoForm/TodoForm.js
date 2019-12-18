import React, { useState } from "react";
import "./TodoForm.scss";
import shortId from "shortid";
const TodoForm = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");
  const onClickHandler = () => {
    setTodos([
      ...todos,
      {
        id: shortId.generate(),
        task: inputValue,
        isCompleted: false
      }
    ]);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="What To Do..."
          value={inputValue}
          autoFocus={true}
          onChange={e => setInputValue(e.target.value)}
        />
        <button onClick={onClickHandler}>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
