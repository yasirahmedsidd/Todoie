import React, { useState } from "react";
import "./TodoList.scss";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
const TodoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  // toggle isComplete property
  const todoCompleted = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  // delete todo
  const todoDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const updateEditedTodo = updatedTask => {
    setTodos(
      todos.map(todo =>
        todo.id === updatedTask.id ? { ...todo, task: updatedTask.task } : todo
      )
    );
  };

  return (
    <div className="Todolist">
      <div className="header">
        <h1 className="title">Todoie!</h1>
        <h3 className="description">A Simple React Todo App.</h3>
        <hr className="breaker" />
      </div>
      {localStorage.setItem("todos", JSON.stringify(todos))}
      <TodoForm todos={todos} setTodos={setTodos} />
      {todos[0] === undefined ? (
        <h3 className="no-task-danger">Add a Task</h3>
      ) : (
        // <div className="TodoList-container">
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todoCompleted={todoCompleted}
            todoDelete={todoDelete}
            updateEditedTodo={updateEditedTodo}
          />
        ))
        // </div>
      )}
    </div>
  );
};

export default TodoList;
