import React, { useState } from 'react'
import { editTodo } from '../../../constants/api'
import { BsCheckCircle, BsCircle, BsTrash, BsPencil, BsCheck } from 'react-icons/bs'
import { Todo, TodoItemProps } from '../../../constants'

import * as S from './TodoItem.style'

const TodoItem = ({ todo, onClickDeleteTodo, onClickToggleTodoDone, onClickEditTodoTitle }: TodoItemProps) => {
  const [isShownEditBtn, setIsShownEditBtn] = useState(true)
  const [title, setTitle] = useState(todo.title)
  const handleEditTodo = async () => {
    setIsShownEditBtn(!isShownEditBtn)

    if (isShownEditBtn) return
    else await editTodo(todo)
  }

  const onChangeEditTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <S.TodoItemBlock done={todo.done}>
      <div>
        {todo.done ? (
          <S.Button onClick={() => onClickToggleTodoDone(todo)}>
            <BsCheckCircle />
          </S.Button>
        ) : (
          <S.Button onClick={() => onClickToggleTodoDone(todo)}>
            <BsCircle />
          </S.Button>
        )}

        {isShownEditBtn ? <span>{title}</span> : <S.Input value={title} onChange={onChangeEditTodoTitle} type="text" />}
      </div>
      <div>
        {isShownEditBtn ? (
          <S.Button onClick={handleEditTodo}>
            <BsPencil />
          </S.Button>
        ) : (
          <S.Button
            onClick={() => {
              handleEditTodo()
              onClickEditTodoTitle(todo, title as string)
            }}
          >
            <BsCheck />
          </S.Button>
        )}

        <S.Button onClick={() => onClickDeleteTodo(todo.id as string)}>
          <BsTrash />
        </S.Button>
      </div>
    </S.TodoItemBlock>
  )
}

export default TodoItem
