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
    color: todo.isCompleted ? "grey" : "black"
  };
  return (
    <>
      {!isEditting ? (
        <div>
          <h3
            style={completedTodoStyles}
            onClick={() => todoCompleted(todo.id)}
          >
            {todo.task}
          </h3>
          <button
            style={{ cursor: todo.isCompleted ? "none" : "pointer" }}
            disabled={todo.isCompleted}
            onClick={() => {
              setIsEditting(true);
            }}
          >
            Edit
          </button>
          <button onClick={() => todoDelete(todo.id)}>Delete</button>
        </div>
      ) : (
        <div>
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
