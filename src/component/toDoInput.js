import React, { useEffect } from "react";
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import {AiFillPlusCircle} from 'react-icons/ai'
import './ToDoInput.css'

const ToDoInput = ({ text, setText, todo, setTodo, editItem, setEditItem }) => {
  function upDateTodo(title, id) {
    const newTodo = todo.map((todo) => (todo.id === id ? { title, id } : todo));
    setTodo(newTodo);
    setEditItem("");
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  useEffect(() => {
    if (editItem) {
      setText(editItem.title);
    } else {
      setText("");
    }
  }, [setText, editItem]);

  function onSubmit(e) {
    e.preventDefault();
    if (!editItem) {
      const uuid = () => Math.floor(Math.random() * 10000);
      setTodo([...todo, { id: uuid(), title: text }]);
      setText("");
    } else {
      upDateTodo(text, editItem.id);
    }
  }

  return (
    <>
      <div className="form-group">
        <form onSubmit={onSubmit} className="form">
          <input autoFocus onChange={handleChange} value={text} type="text" placeholder='Enter item' />
          <button type="submit" className="button">
            {editItem ? <IoIosCheckmarkCircleOutline className='button-icon'/> : <AiFillPlusCircle className='button-icon'/>}
          </button>
        </form>
      </div>
    </>
  );
};

export default ToDoInput;
