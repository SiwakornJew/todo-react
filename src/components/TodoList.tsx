import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import TodoMenu from "./TodoMenu";

interface TodolistProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDeleted: (id: number) => void;
  activateButtonIndex: number;
  onButtonIndexChange: (index: number) => void;
}
export default function TodoList({
  todos,
  onCompletedChange,
  onDeleted,
  activateButtonIndex,
  onButtonIndexChange,
}: Readonly<TodolistProps>) {
  const todoSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  let todosToRender;

  if (activateButtonIndex === 1) {
    todosToRender = todoSorted.filter((todo) => !todo.completed);
  } else if (activateButtonIndex === 2) {
    todosToRender = todoSorted.filter((todo) => todo.completed);
  } else {
    todosToRender = todoSorted;
  }

  return (
    <>
      <div className="space-y-2">
        <TodoMenu
          activateButtonIndex={activateButtonIndex}
          onButtonIndexChange={onButtonIndexChange}
        />
        {todosToRender.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDeleted={onDeleted}
          ></TodoItem>
        ))}
      </div>
      {todosToRender.length === 0 && (
        <p className="text-center text-gray-400">No todos found</p>
      )}
    </>
  );
}
