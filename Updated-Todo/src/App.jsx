import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
 const addTodo = () =>{

 };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList />
    </>
  );
}

export default App;
