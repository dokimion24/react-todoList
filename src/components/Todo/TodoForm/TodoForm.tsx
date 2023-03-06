import React from 'react'
import { TodoFormProps } from '../../../constants'

import * as S from './TodoForm.style'
import { BsPlusLg } from 'react-icons/bs'

const TodoForm = ({ onSubmitTodo, todoInputValue, setTodoInputValue }: TodoFormProps) => {
  const onClickGetTodoTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoInputValue(e.target.value)
  }

  return (
    <S.FormContainer onSubmit={onSubmitTodo}>
      <S.TodoAddInput
        value={todoInputValue}
        type="text"
        onChange={onClickGetTodoTitle}
        placeholder="할 일을 입력해주세요."
      />
      <S.TodoAddBtn type="sumbmit">
        <span>
          <BsPlusLg /> 할 일 추가
        </span>
      </S.TodoAddBtn>
    </S.FormContainer>
  )
}

export default TodoForm
