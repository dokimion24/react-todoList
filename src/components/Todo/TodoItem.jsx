import React, { useState } from 'react';
import { editTodo } from '../../api/api';
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

const TodoItem = ({ todoItem }) => {
  // const { title, done } = todoItem;

  const [todo, setTodo] = useState(todoItem);

  const handleClickEditBtn = (e) => {
    console.log(todo);
  };

  const toggleTodoDone = async () => {
    setTodo({ ...todo, done: !todo.done });
    await editTodo(todo);
  };

  return (
    <TodoItemBlock>
      <div>
        <Button isDone={todo.done} onClick={() => toggleTodoDone(todo.done)}>
          <BsCheckCircle />
        </Button>
        <Button isDone={!todo.done} onClick={() => toggleTodoDone(todo.done)}>
          <BsCircle />
        </Button>
        <span>{todo.title}</span>
        <input type="text" style={{ display: 'none' }} />
      </div>
      <div>
        <button>
          <BsPencil onClick={handleClickEditBtn} />
        </button>
        <button>
          <BsCheck />
        </button>
        <button>
          <BsTrash />
        </button>
      </div>
    </TodoItemBlock>
  );
};

export default TodoItem;
