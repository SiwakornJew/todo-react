import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDeleted: (id: number) => void;
}

export default function TodoItem({ todo, onCompletedChange, onDeleted }: Readonly<TodoItemProps>) {
    return (
        <div className="flex items-center gap-1">
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
                <input type="checkbox" checked={todo.completed} className="scale-125 mr-2" onChange={(e) => onCompletedChange(todo.id, e.target.checked)} />
                <span className={todo.completed ? " text-gray-400" : ""}>{todo.title}</span>
                <span className={todo.completed ? " text-gray-400" : " text-gray-600"}>{todo.detail}</span>
            </label>

            <button className="p-2" onClick={() => onDeleted(todo.id)}><Trash2 size={20} className="text-gray-500"></Trash2></button>
        </div>
    )
}