import React from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import { TodoEdit } from "./TodoEdit";
uuid4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuid4(), task: todo, completed: false, isEditing: false }]);
  };

  const completedToggle = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
  };

  const editTask = (task, id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: task, isEditing: !todo.isEditing } : todo)));
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />;
      {todos.map((todo) => (todo.isEditing ? <TodoEdit editTodo={editTask} task={todo} key={todo.id} /> : <Todo todo={todo} key={todo.id} completedToggle={completedToggle} deleteTodo={deleteTodo} editTodo={editTodo} />))}
    </div>
  );
};
