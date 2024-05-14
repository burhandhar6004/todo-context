import React, { useContext } from "react";
import TodoContext from "../Contex/TodoContext";

const ListItem = ({ todo }) => {
  const { deleteTodo, editTodo } = useContext(TodoContext);
  return (
    <li className="list-group-item">
      <h1 className="dispaly-6">{todo.text}</h1>
      <button
        className="btn btn-outline-danger rounded-0 btn-sm float-end mx-3"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
      <button
        className="btn btn-outline-warning rounded-0 btn-sm float-end mx-3"
        onClick={() => editTodo(todo)}
      >
        Edit
      </button>
    </li>
  );
};

export default ListItem;
