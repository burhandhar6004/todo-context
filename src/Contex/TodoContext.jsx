import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // edit State

  const [edit, setEdit] = useState({
    todo: {},
    editMode: false,
  });

  // deleteTodo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // clear todos

  const clearTodo = (todos) => {
    setTodos(todos.filter((item) => item === todos));
  };

  // Add Todo

  const addTodo = (text) => {
    setTodos([{ id: crypto.randomUUID(), text }, ...todos]);

    // const newTodo = {
    //   id: crypto.randomUUID(),
    //   text: text,
    // },
    // setTodos([newTodo, ...todos]);
  };

  // edit todo

  const editTodo = (oldTodo) => {
    setEdit({
      todo: oldTodo,
      editMode: true,
    });
  };

  // update todo
  const updateTodo = (oldId, text) => {
    setTodos(
      todos.map((item) =>
        item.id === oldId ? { id: oldId, text: text } : item
      )
    );

    setEdit({
      todo: {},
      editMode: false,
    });
  };

  //
  return (
    <TodoContext.Provider
      value={{
        todos,
        deleteTodo,
        addTodo,
        edit,
        editTodo,
        updateTodo,
        clearTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
