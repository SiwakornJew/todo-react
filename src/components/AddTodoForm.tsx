import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string, detail: string) => void;
}

export default function AddTodoForm({ onSubmit }: Readonly<AddTodoFormProps>) {
    const [input, setInput] = useState("");
    const [detail, setDetail] = useState("");
    const [showModal, setShowModal] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!input.trim()) return;

        onSubmit(input, detail);
        setInput("");
        setDetail("");
        setShowModal(false);
    }

    return (
        <div className="flex justify-center space-x-4 " >
            <button onClick={() => setShowModal(true)} className="rounded-lg px-4 py-4 bg-black text-white">Add Todo</button>
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-lg">
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Add a new todo"
                                className="rounded-md border border-gray-400 p-2 mb-2"
                            />
                            <input
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                                placeholder="Add a optional description"
                                className="rounded-md border border-gray-400 p-2 mb-2"
                            />
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-gray-400 text-white rounded-md mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className={`px-4 py-2 rounded-md text-white ${input.trim() ? "bg-slate-900 hover:bg-slate-400" : "bg-gray-400 cursor-not-allowed"}`}

                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
