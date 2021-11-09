import React, { useState } from "react";
import ToDoInput from "./toDoInput";
import ToDoList from "./toDoList";
import "./Main.css";

const Main = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [editItem, setEditItem] = useState(null);

  return (
    <>
      <div className="toDo-section">
        <div className="container">
          <div className="text-heading">
            <h2>To Do List</h2>
            <ToDoInput
              text={text}
              setText={setText}
              todo={todo}
              setTodo={setTodo}
              editItem={editItem}
              setEditItem={setEditItem}
            />
            <ToDoList todo={todo} setTodo={setTodo} setEditItem={setEditItem} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
