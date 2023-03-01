import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import TodoItem from "./TodoItem";

const TodoItemListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

const TodoItemList = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    setIsloading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
        {
          headers: {
            "content-type": "application/json",
            apikey: "FcKdtJs202301",
            username: "KDT4_LeeChanYoung",
          },
        }
      );
      setIsloading(false);
      return response.data;
    } catch (error) {
      setIsloading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    (async () => {
      const todo = await fetchTodos();
      setTodoList(todo);
    })();
  }, []);

  let content = <p>할 일을 추가해주세요</p>;

  if (todoList?.length > 0) {
    content = (
      <ul>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </ul>
    );
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <TodoItemListBlock>
      <div>{content}</div>
    </TodoItemListBlock>
  );
};

export default TodoItemList;
