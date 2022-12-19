import React from "react";
import Todoform from "../Todoform/Todoform";
import "./NewTodo.css";

export default function NewTodo(props) {
  const saveTodo = (userTodo) => {
    console.log(userTodo);
    const finaltodo = { ...userTodo, id: Math.random().toString() };
    props.onAddtodo(finaltodo);
  };
  return (
    <div className="NewTodo">
      <Todoform onSaveTodo={saveTodo} />
    </div>
  );
}
