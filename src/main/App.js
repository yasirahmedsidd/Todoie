import React from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
function App() {
  return (
    <div className="App">
      <h1>
        <TodoList />
      </h1>
    </div>
  );
}

export default App;
