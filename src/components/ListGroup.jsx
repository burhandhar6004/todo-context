import React, { useContext } from "react";
import ListItem from "./ListItem";
import TodoContext from "../Contex/TodoContext";

const ListGroup = ({ editTodo }) => {
  const { todos } = useContext(TodoContext);
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ListGroup;
