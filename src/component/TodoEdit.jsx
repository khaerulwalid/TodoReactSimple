import React from "react";
import { useState } from "react";

export const TodoEdit = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };
  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <input type="text" className="todo-input" placeholder="Edit Tugas ?" onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit" className="todo-btn">
          Edit Tugas
        </button>
      </form>
    </div>
  );
};
