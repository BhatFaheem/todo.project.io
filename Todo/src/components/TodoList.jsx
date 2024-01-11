// TodoList code
import { List } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";
function TodoList({ todos, editTodo, deleteTodo, toggleTodo }) {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  );
}

export default TodoList;
