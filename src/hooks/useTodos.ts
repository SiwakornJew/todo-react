import { useEffect, useState } from "react";
import { Todo } from "../types/todo";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );

    return savedTodos;
  });

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }
  function addTodo(title: string, detail: string) {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        title,
        detail,
        completed: false,
      },
    ]);
  }
  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

  function setButtonIndex(index: number) {
    setActiveButtonIndex(index);
  }

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteCompletedTodos,
    activeButtonIndex,
    setButtonIndex,
  };
}
