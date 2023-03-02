import React, { useState } from "react";
import { editTodo } from "../../api/api";
import {
  BsCheckCircle,
  BsCircle,
  BsTrash,
  BsPencil,
  BsCheck,
} from "react-icons/bs";
import styled from "styled-components";

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
  display: ${(props) => (props.isDone ? "inline" : "none")};
`;

const TodoItem = ({ todo, onCLickDleteTodo, onClickToggleTodoDone }) => {
  const [isShownEditBtn, setIsSownEditBtn] = useState(true);

  const handleEditTodo = async () => {
    setIsSownEditBtn(!isShownEditBtn);

    if (isShownEditBtn) return;
    else await editTodo(todo);
  };

  const handleChangeTitle = (e) => {
    setTodo({ ...todo, title: e.target.value });
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
          <span>{todo.title}</span>
        ) : (
          <input value={todo.title} onChange={handleChangeTitle} type="text" />
        )}
      </div>
      <div>
        {isShownEditBtn ? (
          <button onClick={handleEditTodo}>
            <BsPencil />
          </button>
        ) : (
          <button onClick={handleEditTodo}>
            <BsCheck />
          </button>
        )}

        <button onClick={() => onCLickDleteTodo(todo.id)}>
          <BsTrash />
        </button>
      </div>
    </TodoItemBlock>
  );
};

export default TodoItem;
