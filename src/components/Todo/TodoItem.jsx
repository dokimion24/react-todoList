import React from "react";

const TodoItem = ({ todoItem }) => {
  console.log(todoItem);
  const { title } = todoItem;
  return (
    <div>
      <div>
        <span>체크</span>
        <span>{title}</span>
        <input type="text" />
      </div>
      <div>
        <span>수정</span>
        <span>완료</span>
        <span>삭제</span>
      </div>
    </div>
  );
};

export default TodoItem;
