import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { NavLink } from "react-router-dom";

const DoneTodoPage = () => {
  const { doneTodos } = useContext(TodoContext);

  return (
    <div>
      <h3>Total todos: {doneTodos.length}</h3>
      <hr />
      {doneTodos.length === 0 ? (
        <h1>You have done nothing ...</h1>
      ) : (
        doneTodos.map(({ id, title, description }) => {
          return (
            <div key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Status: Done</p>
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

export default DoneTodoPage;
