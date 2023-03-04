import React, { useState } from 'react';

import * as S from './TodoHeader.style';

const TodoHeader = ({ numberOfLeftTodo }) => {
  const today = new Date();
  const [dateTime, setDateTime] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    day: new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(today),
  });

  return (
    <S.TodoHeadBlock>
      <S.TodoDate>
        <div>
          <span>{dateTime.year}</span>년<span>{dateTime.month}</span>월
          <span>{dateTime.date}</span>일
        </div>
        <div>{dateTime.day}</div>
      </S.TodoDate>
      <div>남은 할 일 : {numberOfLeftTodo}개</div>
    </S.TodoHeadBlock>
  );
};

export default TodoHeader;
