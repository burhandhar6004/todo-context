import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../Contex/TodoContext";

const Form = () => {
  const { addTodo, editTodo, edit, updateTodo, clearTodo, todos } =
    useContext(TodoContext);

  //   console.log(todos)

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.editMode) {
      updateTodo(edit.todo.id, text);
    } else {
      addTodo(text);
    }
    setText("");
  };

  const handleClear = (todos) => {
    clearTodo(todos);
  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);

  return (
    <>
      <form
        className="form-control rounded-0 m-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Enter Text Here!"
          className="form-control rounded-0 w-100"
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        />
        <button className="btn btn-success rounded-0 my-3 w-100">Save</button>
      </form>
      <button
        className="btn btn-danger rounded-0 mx-5  w-100"
        onClick={() => handleClear(todos)}
      >
        Clear All
      </button>
    </>
  );
};

export default Form;
