import React from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoForm from '../TodoForm/TodoForm'
import TodoItemList from '../TodoItemList/TodoItemList'

import * as S from './TodoList.style'

const TodoList = ({
  numberOfLeftTodo,
  onSubmitTodo,
  todoInputValue,
  setTodoInputValue,
  todos,
  isLoading,
  error,
  onClickDleteTodo,
  onClickToggleTodoDone,
  onClickEditTodoTitle,
  dateTime,
}) => {
  return (
    <S.TodoTemplateBlock>
      <TodoHeader numberOfLeftTodo={numberOfLeftTodo} dateTime={dateTime} />
      <TodoForm onSubmitTodo={onSubmitTodo} todoInputValue={todoInputValue} setTodoInputValue={setTodoInputValue} />
      <TodoItemList
        todos={todos}
        isLoading={isLoading}
        error={error}
        onClickDleteTodo={onClickDleteTodo}
        onClickToggleTodoDone={onClickToggleTodoDone}
        onClickEditTodoTitle={onClickEditTodoTitle}
      />
    </S.TodoTemplateBlock>
  )
}

export default TodoList
