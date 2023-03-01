import React from "react";
import { BsCheckCircle, BsCircle, BsTrash, BsPencil } from "react-icons/bs";

const TodoItem = ({ todoItem }) => {
  console.log(todoItem);
  const { title } = todoItem;
  return (
    <div>
      <div>
        <button>
          <BsCheckCircle /> <BsCircle />
        </button>
        <span>{title}</span>
        <input type="text" />
      </div>
      <div>
        <button>
          <BsPencil />
        </button>
        <button>
          <BsTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
