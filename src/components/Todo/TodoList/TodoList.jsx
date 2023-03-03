import React, { useState, useEffect } from 'react';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoForm from '../TodoForm/TodoForm';
import TodoItemList from '../TodoItemList/TodoItemList';

import * as S from './TodoList.style';

import {
  fetchTodos,
  deleteTodo,
  addTodo,
  editTodo,
} from '../../../constants/api';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [todoInputValue, setTodoInputValue] = useState('');
  const [numberOfLeftTodo, setNumberOfLeftTodo] = useState();

  const getNumberOfLeftTodo = () => {
    const newTodos = todos.filter((todo) => todo.done === false);
    return newTodos.length;
  };

  const HandleFetchTodos = async () => {
    setIsloading(true);
    setError(null);
    try {
      const todos = await fetchTodos();
      todos.sort((a, b) => a.done - b.done);
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

  useEffect(() => {
    setNumberOfLeftTodo(getNumberOfLeftTodo());
  }, [todos]);

  const onClickDleteTodo = async (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
    await deleteTodo(id);
  };

  const onSubmitTodo = async (e) => {
    e.preventDefault();

    if (todoInputValue.trim().length === 0) {
      alert('할 일을 입력해주세요');
      return;
    }

    const newTodos = await addTodo(todoInputValue);
    setTodos((prev) => [newTodos, ...prev]);
  };

  const onClickToggleTodoDone = async (clickedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === clickedTodo.id) {
        todo.done = !clickedTodo.done;
      }
      return todo;
    });
    newTodos.sort((a, b) => a.done - b.done);
    setTodos(newTodos);
    await editTodo(clickedTodo);
  };

  const onClickEditTodoTitle = async (clickedTodo, title) => {
    console.log(clickedTodo);
    clickedTodo.title = title;
    const newTodos = todos.map((todo) => {
      if (todo.id === clickedTodo.id) {
        todo.title = clickedTodo.title;
      }
      return todo;
    });

    setTodos(newTodos);
    await editTodo(clickedTodo);
  };

  return (
    <S.TodoTemplateBlock>
      <TodoHeader numberOfLeftTodo={numberOfLeftTodo} />
      <TodoForm
        onSubmitTodo={onSubmitTodo}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
      />
      <TodoItemList
        todos={todos}
        isLoading={isLoading}
        error={error}
        onClickDleteTodo={onClickDleteTodo}
        onClickToggleTodoDone={onClickToggleTodoDone}
        onClickEditTodoTitle={onClickEditTodoTitle}
      />
    </S.TodoTemplateBlock>
  );
};

export default TodoList;
