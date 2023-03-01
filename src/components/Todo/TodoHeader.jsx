import React, { useState } from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding: 12px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  h2 {
    margin: 0;
    font-size: 24px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 18px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 14px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHeader = () => {
  const today = new Date();
  const dateTime = {
    year: today.getFullYear,
    month: new Intl.DateTimeFormat("en", { month: "short" }).format(today),
    date: today.getDate(),
    day: new Intl.DateTimeFormat("en", { weekday: "short" }).format(today),
  };

  return (
    <TodoHeadBlock>
      <h2>2019년 7월 10일</h2>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHeader;
