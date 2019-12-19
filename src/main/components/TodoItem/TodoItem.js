import React, { useState } from "react";
import "./TodoItem.scss";
const TodoItem = ({ todo, todoCompleted, todoDelete, updateEditedTodo }) => {
  const [isEditting, setIsEditting] = useState(false);
  const [updateInput, setUpdateInput] = useState(todo.task);

  //send updated values to TaskList component
  const updateValues = () => {
    updateEditedTodo({ id: todo.id, task: updateInput });
    setIsEditting(false);
  };
  const completedTodoStyles = {
    textDecoration: todo.isCompleted ? "line-through" : "",
    color: todo.isCompleted && "#888888"
  };

  return (
    <>
      {!isEditting ? (
        <div className="Todoitem">
          <button
            className="edit-btn"
            style={{ cursor: todo.isCompleted ? "none" : "pointer" }}
            disabled={todo.isCompleted}
            onClick={() => {
              setIsEditting(true);
            }}
          >
            <i
              className="material-icons"
              style={{ color: todo.isCompleted && "#888888" }}
            >
              edit
            </i>
          </button>
          <button
            className="edit-btn del-btn"
            onClick={() => todoDelete(todo.id)}
          >
            <i className="material-icons">delete</i>
          </button>
          <h3
            className="todo-item-task"
            style={completedTodoStyles}
            onClick={() => todoCompleted(todo.id)}
          >
            {todo.task}
          </h3>
        </div>
      ) : (
        <div className="edit-container">
          <input
            name="updateInput"
            type="text"
            value={updateInput}
            autoFocus={true}
            placeholder="Edit"
            onChange={e => setUpdateInput(e.target.value)}
            onKeyPress={e => e.charCode === 13 && updateValues()}
          />
          <button onClick={updateValues}>Done</button>
        </div>
      )}
    </>
  );
};

export default TodoItem;
