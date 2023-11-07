import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

const TodoDetailPage = () => {
  const { todoId } = useParams();

  const { todos } = useContext(TodoContext);

  return (
    <div>
      <hr />
      <h1>Todo Description Page</h1>
      {!todos.length ? (
        <h1>Loading . . .</h1>
      ) : (
        todos
          .filter(({ id }) => id === Number(todoId))
          .map(({ id, title, description, isCompleted }) => {
            return (
              <div key={id}>
                <h2>Title: {title}</h2>
                <p>
                  <b>Description: </b>
                  {description}
                </p>
                <p>
                  <b>Status: </b>
                  {isCompleted ? "Done" : "Not Done"}
                </p>
              </div>
            );
          })
      )}
    </div>
  );
};

export default TodoDetailPage;
