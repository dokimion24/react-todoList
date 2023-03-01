import React from "react";
import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";
import TodoItemList from "./TodoItemList";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  width: 500px;
  height: 82vh;
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

const TodoList = () => {
  return (
    <TodoTemplateBlock>
      <TodoHeader />
      <TodoForm />
      <TodoItemList />
    </TodoTemplateBlock>
  );
};

export default TodoList;
