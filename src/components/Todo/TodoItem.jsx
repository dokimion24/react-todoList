import React from "react";
import { BsCheckCircle, BsCircle, BsTrash, BsPencil } from "react-icons/bs";

const TodoItem = ({ todoItem }) => {
  console.log(todoItem);
  const { title } = todoItem;
  return (
    <div>
      <div>
        <span>
          <BsCheckCircle />
          <BsCircle />
        </span>
        <span>{title}</span>
        <input type="text" />
      </div>
      <div>
        <span>
          <BsPencil />
        </span>
        <span>
          <BsTrash />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
