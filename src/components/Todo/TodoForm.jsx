import React from 'react';

const TodoForm = (handleAddTodo) => {
  return (
    <form>
      <input type="text" />
      <button type="sumbmit" onSubmit={handleAddTodo}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
