import { Todo } from "../types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    onClearCompleted: () => void;
}
export default function TodoSummary({ todos, onClearCompleted }: Readonly<TodoSummaryProps>) {
    const completedTodos = todos.filter((todo) => todo.completed);

    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">{completedTodos.length}/{todos.length} todo completed</p>
            {completedTodos.length > 0 && (
                <button onClick={onClearCompleted} className="text-sm text-red-500 hover:underline">Clear Completed</button>
            )}
        </div>
    )
}