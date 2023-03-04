import React from 'react'

import * as S from './TodoHeader.style'

const TodoHeader = ({ numberOfLeftTodo, dateTime }) => {
  return (
    <S.TodoHeadBlock>
      <S.TodoDate>
        <div>
          <span>
            {dateTime.year}년 {dateTime.month}월 {dateTime.date}일
          </span>
        </div>
        <div>{dateTime.day}</div>
      </S.TodoDate>
      <div>남은 할 일 : {numberOfLeftTodo}개</div>
    </S.TodoHeadBlock>
  )
}

export default TodoHeader
