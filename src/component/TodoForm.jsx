import React from "react";
import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };
  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <input type="text" className="todo-input" placeholder="Tugas apa hari ini ?" onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit" className="todo-btn">
          Tambah
        </button>
      </form>
    </div>
  );
};
