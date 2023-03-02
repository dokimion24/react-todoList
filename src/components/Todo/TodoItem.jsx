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

const TodoItem = ({ todoItem, onCLickDleteTodo }) => {
  const [todo, setTodo] = useState(todoItem);
  const [isShownEditBtn, setIsSownEditBtn] = useState(true);

  const handleEditTodo = async () => {
    setIsSownEditBtn(!isShownEditBtn);

    if (isShownEditBtn) return;
    else await editTodo(todo);
  };

  const handleToggleCheckBtn = async () => {
    setTodo({ ...todo, done: !todo.done });
    await editTodo(todo);
  };

  const handleChangeTitle = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  return (
    <TodoItemBlock>
      <div>
        <Button isDone={todo.done} onClick={handleToggleCheckBtn}>
          <BsCheckCircle />
        </Button>
        <Button isDone={!todo.done} onClick={handleToggleCheckBtn}>
          <BsCircle />
        </Button>
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
