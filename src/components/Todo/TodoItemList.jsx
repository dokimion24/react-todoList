import React from "react";
import styled from "styled-components";

const TodoItemListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;




const TodoItemList = () => {
  return <TodoItemListBlock>TodoList</TodoItemListBlock>;
};

export default TodoItemList;
