import React from "react";
import "./Todoform.css";
import { useState } from "react";

export default function Todoform(props) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [date, setTodoDate] = useState("");
  const textchangehandler = (event) => {
    setTitle(event.target.value);
  };
  const prioritychangehandler = (event) => {
    setPriority(event.target.value);
  };
  const datechangehandler = (event) => {
    setTodoDate(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(title, priority, date);
    const finalTodo = {
      title: title,
      priority: priority,
      date: new Date(date),
    };
    props.onSaveTodo(finalTodo);
    setTitle("");
    setPriority("High");
    setTodoDate("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="todo-controls">
        <div className="control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={textchangehandler}
            value={title}
          />
        </div>
        <div className="control">
          <label htmlFor="priority">Priority</label>
          <select onChange={prioritychangehandler} value={priority}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            onChange={datechangehandler}
            value={date}
          />
        </div>
        <br></br>
        <div className="actions">
          <button type="submit">Add Todo</button>
        </div>
      </div>
    </form>
  );
}
