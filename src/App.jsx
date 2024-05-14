import React, { useState } from "react";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import { TodoProvider } from "./Contex/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <Navbar />
      <div className="container">
        <Form />
        <ListGroup />
      </div>
    </TodoProvider>
  );
};

export default App;
