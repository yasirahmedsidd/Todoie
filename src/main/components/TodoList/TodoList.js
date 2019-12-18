import React from "react";
import "./TodoList.scss";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
const TodoList = () => {
  return (
    <div>
      <TodoForm />
      <TodoItem />
    </div>
  );
};

export default TodoList;
