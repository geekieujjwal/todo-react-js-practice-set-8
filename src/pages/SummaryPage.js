import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const SummaryPage = () => {
  const { todos, handleMarkDoneBtn } = useContext(TodoContext);

  //   const handleClick = (todo) => {
  //     handleMarkDoneBtn(todo);
  //   };

  const styles = {
    textDecoration: "line-through",
  };

  const btnStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "0.5rem 1rem",
    cursor: "pointer",
  };

  return (
    <div>
      {!todos.length ? (
        <h1>Loading . . .</h1>
      ) : (
        todos.map((todo) => {
          const { id, title, description, isCompleted } = todo;
          return (
            <div key={id}>
              <h3 style={isCompleted ? styles : {}}>{title}</h3>
              <p style={isCompleted ? styles : {}}>{description}</p>
              <button
                onClick={() => handleMarkDoneBtn(todo)}
                style={
                  isCompleted
                    ? btnStyle
                    : {
                        cursor: "pointer",
                        color: "white",
                        backgroundColor: "green",
                        padding: "0.5rem 1rem",
                      }
                }
              >
                {isCompleted ? "Mark as not Done" : "Mark as Done"}
              </button>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
};

export default SummaryPage;
