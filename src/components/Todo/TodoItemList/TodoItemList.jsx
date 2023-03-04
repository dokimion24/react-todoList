import React from 'react'

import TodoItem from '../TodoItem/TodoItem'
import * as S from './TodoItemList.style'

const TodoItemList = ({ todos, isLoading, error, onClickDleteTodo, onClickToggleTodoDone, onClickEditTodoTitle }) => {
  let content = <p>할 일을 추가해주세요</p>

  if (todos?.length > 0) {
    content = (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onClickDleteTodo={onClickDleteTodo}
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
