import React from 'react'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoForm from '../TodoForm/TodoForm'
import TodoItemList from '../TodoItemList/TodoItemList'
import { TodoListProps } from '../../constants'

import * as S from './TodoList.style'

const TodoList = ({
  numberOfLeftTodo,
  handleSubmitAddTodo,
  todoInputValue,
  setTodoInputValue,
  todos,
  isLoading,
  error,
  handleClickDeleteTodo,
  handleClickToggleTodoDone,
  handleClickEditTodo,
  dateTime,
}: TodoListProps) => {
  return (
    <S.TodoTemplateBlock>
      <TodoHeader numberOfLeftTodo={numberOfLeftTodo} dateTime={dateTime} />
      <TodoForm
        handleSubmitAddTodo={handleSubmitAddTodo}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
      />
      <TodoItemList
        todos={todos}
        isLoading={isLoading}
        error={error}
        handleClickDeleteTodo={handleClickDeleteTodo}
        handleClickToggleTodoDone={handleClickToggleTodoDone}
        handleClickEditTodo={handleClickEditTodo}
      />
    </S.TodoTemplateBlock>
  )
}

export default TodoList
