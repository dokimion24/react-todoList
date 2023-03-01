import React from "react";
import TodoCalendar from "./components/Calendar/TodoCalendar";
import TodoList from "./components/Todo/TodoList";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    display: flex;
  }
`;

const TodoWrapper = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoWrapper>
        <TodoCalendar />
        <TodoList />
      </TodoWrapper>
    </>
  );
};

export default App;
