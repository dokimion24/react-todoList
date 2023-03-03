import React from 'react';

const TodoForm = ({ onSubmitTodo, todoInputValue, setTodoInputValue }) => {
  const onClickGetTodoTitle = (e) => {
    setTodoInputValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmitTodo}>
      <input
        value={todoInputValue}
        type="text"
        onChange={onClickGetTodoTitle}
      />
      <button type="sumbmit">Add</button>
    </form>
  );
};

export default TodoForm;
