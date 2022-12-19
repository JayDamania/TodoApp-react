import React from "react";
import "./Todos.css";
import Todoitem from "../Todoitem/Todoitem";
import Cards from "../Cards/Cards";
export default function Todos(props) {
  const todoArray = props.data;
  return (
    <Cards className="todos">
      {todoArray.map((todo) => (
        <Todoitem
          title={todo.title}
          date={todo.date}
          priority={todo.priority}
          key={todo.id}
        />
      ))}
    </Cards>
  );
}
