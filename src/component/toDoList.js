import React from "react";
import { FaPenFancy } from "react-icons/fa";
import { GrBasket } from "react-icons/gr";
import "./ToDoList.css";

const ToDoList = ({ todo, setTodo, setEditItem }) => {
  function deleteItem({ id }) {
    setTodo(todo.filter((item) => item.id !== id));
  }

  function editItem({ id }) {
    const findTodo = todo.find((item) => item.id === id);
    setEditItem(findTodo);
  }
  
  return (
    <div className="list">
			{todo.length===0?<h1 className='add-item'>Add item</h1>:todo.map((item) => {
        return (
          <>
            <li className="list-item" key={{item}.id}>
              <input
                type="text"
                value={item.title}
                onChange={(e) => e.preventDefault()}
              />
              <div className="button-group">
                <button>
                  <FaPenFancy
                    className="icons"
                    onClick={() => editItem(item)}
                  />
                </button>
                <button>
                  <GrBasket
                    className="icons"
                    onClick={() => deleteItem(item)}
                  />
                </button>
              </div>
            </li>
          </>
        );
      })}
    </div>
  );
};

export default ToDoList;
