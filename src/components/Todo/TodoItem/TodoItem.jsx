import React, { useState } from 'react';
import { editTodo } from '../../../constants/api';
import {
  BsCheckCircle,
  BsCircle,
  BsTrash,
  BsPencil,
  BsCheck,
} from 'react-icons/bs';

import * as S from './TodoItem.style';

const TodoItem = ({
  todo,
  onClickDleteTodo,
  onClickToggleTodoDone,
  onClickEditTodoTitle,
}) => {
  const [isShownEditBtn, setIsShownEditBtn] = useState(true);
  const [title, setTitle] = useState(todo.title);
  const handleEditTodo = async () => {
    setIsShownEditBtn(!isShownEditBtn);

    if (isShownEditBtn) return;
    else await editTodo(todo);
  };

  const onChangeEditTodoTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <S.TodoItemBlock>
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

        {isShownEditBtn ? (
          <span>{title}</span>
        ) : (
          <input value={title} onChange={onChangeEditTodoTitle} type="text" />
        )}
      </div>
      <div>
        {isShownEditBtn ? (
          <S.Button onClick={handleEditTodo}>
            <BsPencil />
          </S.Button>
        ) : (
          <S.Button
            onClick={() => {
              handleEditTodo();
              onClickEditTodoTitle(todo, title);
            }}
          >
            <BsCheck />
          </S.Button>
        )}

        <S.Button onClick={() => onClickDleteTodo(todo.id)}>
          <BsTrash />
        </S.Button>
      </div>
    </S.TodoItemBlock>
  );
};

export default TodoItem;
