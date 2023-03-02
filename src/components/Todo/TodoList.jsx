import React, { useState, useEffect } from "react";
import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";
import TodoItemList from "./TodoItemList";
import styled from "styled-components";

import { fetchTodos, deleteTodo, addTodo } from "../../api/api";

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  width: 500px;
  height: 82vh;
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [todoInputValue, setTodoInputValue] = useState("");

  const HandleFetchTodos = async () => {
    setIsloading(true);
    setError(null);
    try {
      const todos = await fetchTodos();
      setTodos(todos);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    (async () => {
      HandleFetchTodos();
    })();
  }, []);

  const onCLickDleteTodo = async (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
    await deleteTodo(id);
  };

  const onSubmitTodo = async (e) => {
    e.preventDefault();

    if (todoInputValue.trim().length === 0) {
      alert("할 일을 입력해주세요");
      return;
    }

    const addedTodo = await addTodo(todoInputValue);
    setTodos((prev) => [addedTodo, ...prev]);
  };

  return (
    <TodoTemplateBlock>
      <TodoHeader />
      <TodoForm
        onSubmitTodo={onSubmitTodo}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
      />
      <TodoItemList
        todos={todos}
        isLoading={isLoading}
        error={error}
        onCLickDleteTodo={onCLickDleteTodo}
      />
    </TodoTemplateBlock>
  );
};

export default TodoList;
