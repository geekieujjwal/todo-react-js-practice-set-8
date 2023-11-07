import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { NavLink } from "react-router-dom";

const OpenTodoPage = () => {
  const { todos } = useContext(TodoContext);

  const filteredTodo = todos.filter(({ isCompleted }) => !isCompleted);

  return (
    <div>
      <h3>Total todos: {filteredTodo.length}</h3>
      <hr />

      {!filteredTodo.length ? (
        <h2>Great! You are done with all of the tasks...</h2>
      ) : !todos.length ? (
        <h1>Loading . . .</h1>
      ) : (
        filteredTodo.map(({ id, title, description }) => {
          return (
            <div key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Status: Not Done</p>
              <NavLink to={`/todo/${id}`} className="nav-link">
                Expand Todo
              </NavLink>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
};

export default OpenTodoPage;
