import React from "react";
import { FaCartPlus, FaPen } from "react-icons/fa";

const ToDoList = ({ todo, setTodo, setEditItem }) => {
  function deleteItem({ id }) {
    setTodo(todo.filter((item) => item.id !== id));
  }

  function editItem({ id }) {
    const findTodo = todo.find((item) => item.id === id);
    setEditItem(findTodo);
  }

  return (
    <>
      {todo.map((item) => {
        return (
          <>
            <li className="list-item" key={item.id}>
              <input
                type="text"
                value={item.title}
                onChange={(e) => e.preventDefault()}
              />
            </li>
            <div>
              <FaPen onClick={() => editItem(item)} />
              <FaCartPlus onClick={() => deleteItem(item)} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default ToDoList;
