import React from "react";
import DateTime from "./components/Date/DateTime";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

const App = () => {
  return (
    <>
      <DateTime />
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
