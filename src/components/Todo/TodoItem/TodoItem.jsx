import React, { useState } from 'react';
import { editTodo } from '../../constants/api';
import {
  BsCheckCircle,
  BsCircle,
  BsTrash,
  BsPencil,
  BsCheck,
} from 'react-icons/bs';
import styled from 'styled-components';

const TodoItemBlock = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  display: ${(props) => (props.isDone ? 'inline' : 'none')};
`;

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
    <TodoItemBlock>
      <div>
        {todo.done ? (
          <button onClick={() => onClickToggleTodoDone(todo)}>
            <BsCheckCircle />
          </button>
        ) : (
          <button onClick={() => onClickToggleTodoDone(todo)}>
            <BsCircle />
          </button>
        )}

        {isShownEditBtn ? (
          <span>{title}</span>
        ) : (
          <input value={title} onChange={onChangeEditTodoTitle} type="text" />
        )}
      </div>
      <div>
        {isShownEditBtn ? (
          <button onClick={handleEditTodo}>
            <BsPencil />
          </button>
        ) : (
          <button
            onClick={() => {
              handleEditTodo();
              onClickEditTodoTitle(todo, title);
            }}
          >
            <BsCheck />
          </button>
        )}

        <button onClick={() => onClickDleteTodo(todo.id)}>
          <BsTrash />
        </button>
      </div>
    </TodoItemBlock>
  );
};

export default TodoItem;
