import React from "react";

import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoItemListBlock = styled.div``;

const TodoItemList = ({
  todos,
  isLoading,
  error,
  onCLickDleteTodo,
  onClickToggleTodoDone,
}) => {
  let content = <p>할 일을 추가해주세요</p>;

  if (todos?.length > 0) {
    content = (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCLickDleteTodo={onCLickDleteTodo}
            onClickToggleTodoDone={onClickToggleTodoDone}
          />
        ))}
      </ul>
    );
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }
  return <TodoItemListBlock todos={todos}>{content}</TodoItemListBlock>;
};

export default TodoItemList;
