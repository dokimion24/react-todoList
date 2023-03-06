import React from 'react'
import { TodoItemListProps } from '../../../constants'

import TodoItem from '../TodoItem/TodoItem'
import * as S from './TodoItemList.style'

const TodoItemList = ({
  todos,
  isLoading,
  error,
  onClickDeleteTodo,
  onClickToggleTodoDone,
  onClickEditTodoTitle,
}: TodoItemListProps) => {
  let content = <p>할 일을 추가해주세요</p>

  if (todos?.length > 0) {
    content = (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onClickDeleteTodo={onClickDeleteTodo}
            onClickToggleTodoDone={onClickToggleTodoDone}
            onClickEditTodoTitle={onClickEditTodoTitle}
          />
        ))}
      </ul>
    )
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  if (error) {
    content = <p>{error}</p>
  }
  return <S.TodoItemListBlock todos={todos}>{content}</S.TodoItemListBlock>
}

export default TodoItemList
