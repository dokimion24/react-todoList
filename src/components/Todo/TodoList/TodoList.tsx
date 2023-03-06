import React from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoForm from '../TodoForm/TodoForm'
import TodoItemList from '../TodoItemList/TodoItemList'
import { TodoListProps } from '../../../constants'

import * as S from './TodoList.style'

const TodoList = ({
  numberOfLeftTodo,
  onSubmitTodo,
  todoInputValue,
  setTodoInputValue,
  todos,
  isLoading,
  error,
  onClickDeleteTodo,
  onClickToggleTodoDone,
  onClickEditTodoTitle,
  dateTime,
}: TodoListProps) => {
  return (
    <S.TodoTemplateBlock>
      <TodoHeader numberOfLeftTodo={numberOfLeftTodo} dateTime={dateTime} />
      <TodoForm onSubmitTodo={onSubmitTodo} todoInputValue={todoInputValue} setTodoInputValue={setTodoInputValue} />
      <TodoItemList
        todos={todos}
        isLoading={isLoading}
        error={error}
        onClickDeleteTodo={onClickDeleteTodo}
        onClickToggleTodoDone={onClickToggleTodoDone}
        onClickEditTodoTitle={onClickEditTodoTitle}
      />
    </S.TodoTemplateBlock>
  )
}

export default TodoList
