import { createContext, useEffect, useState } from "react";
import fakeFetch from "../Data";

export const TodoContext = createContext();

export function ContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const handleMarkDoneBtn = (todo) => {
    setTodos((prev) =>
      prev.map((todoItem) =>
        todoItem.id === todo.id
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      )
    );

    if (todo.isCompleted) {
      // If the todo was completed and is now marked as not completed, remove it from doneTodos
      setDoneTodos((prev) =>
        prev.filter((doneTodo) => doneTodo.id !== todo.id)
      );
    } else {
      // If the todo was not completed and is now marked as completed, add it to doneTodos
      setDoneTodos((prev) => [...prev, todo]);
    }
  };

  useEffect(() => {
    fakeFetch("https://example.com/api/todos").then((data) => {
      setTodos(data.data.todos);
    });
  }, []);

  return (
    <TodoContext.Provider
      value={{ todos, doneTodos, setDoneTodos, handleMarkDoneBtn }}
    >
      {children}
    </TodoContext.Provider>
  );
}
