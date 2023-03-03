import React, { useState } from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #e9ecef;
  h2 {
    font-size: 24px;
    color: #343a40;
    marign-bottom: 10px;
    
    span{
      color #002790;
    }
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

const TodoHeader = ({ numberOfLeftTodo }) => {
  const today = new Date();
  const [dateTime, setDateTime] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    day: new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(today),
  });

  return (
    <TodoHeadBlock>
      <h2>
        <span>{dateTime.year}</span>년 <span>{dateTime.month}</span>월{' '}
        <span>{dateTime.date}</span>일
      </h2>
      <div>{dateTime.day}</div>
      <div>할 일 {numberOfLeftTodo}개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHeader;
