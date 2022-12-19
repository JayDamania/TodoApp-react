import React from "react";
import "./Todoitem.css";
import TodoDate from "../TodoDate/TodoDate";
import { useState } from "react";

export default function Todoitem(props) {
  const [title, setTitle] = useState(props.title);
  const todoDate = props.date;
  let todoTitle = props.title;
  const todopriority = props.priority;

  return (
    <div className="todo-item">
      <TodoDate finalDate={todoDate} />
      <div className="todo-description">
        <h1>{title}</h1>
        <div className="todo-priority">{todopriority}</div>
      </div>
    </div>
  );
}
