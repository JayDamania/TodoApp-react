import Todos from "./Components/Todos/Todos";
import "./App.css";
import NewTodo from "./Components/NewTodo/NewTodo";
import { useState } from "react";
import React from "react";
const todoArray = [];
function App() {
  const [allTodo, setAllTodo] = useState(todoArray);
  const addTodo = (userTodo) => {
    setAllTodo((olddata) => {
      return [userTodo, ...olddata];
    });
    console.log(userTodo);
  };
  return (
    <div className="App">
      <NewTodo onAddtodo={addTodo} />
      <Todos data={allTodo} />
    </div>
  );
}

export default App;
