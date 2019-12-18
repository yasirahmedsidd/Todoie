import React, { useState } from "react";
import "./TodoForm.scss";
import shortId from "shortid";
const TodoForm = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const onClickHandler = () => {
    if (inputValue !== "") {
      setTodos([
        ...todos,
        {
          id: shortId.generate(),
          task: inputValue,
          isCompleted: false
        }
      ]);
      setInputValue("");
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
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
        {isEmpty && inputValue === "" && <label>Enter a value</label>}
      </form>
    </div>
  );
};

export default TodoForm;
