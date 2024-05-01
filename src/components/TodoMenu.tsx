interface TodoMenuProps {
    activateButtonIndex: number;
    onButtonIndexChange: (index: number) => void;
}
export default function TodoMenu({ activateButtonIndex, onButtonIndexChange }: Readonly<TodoMenuProps>) {
    return (
        <div className="flex justify-center space-x-4 ">
            <button className={`rounded-lg px-4 py-2 ${activateButtonIndex === 0 ? "bg-white text-green-400" : "bg-black text-white"}`} onClick={() => onButtonIndexChange(0)}>All</button>
            <button className={`rounded-lg px-4 py-2 ${activateButtonIndex === 1 ? "bg-white text-green-400" : "bg-black text-white"}`} onClick={() => onButtonIndexChange(1)}>Active</button>
            <button className={`rounded-lg px-4 py-2 ${activateButtonIndex === 2 ? "bg-white text-green-400" : "bg-black text-white"}`} onClick={() => onButtonIndexChange(2)}>Completed</button>
        </div>
    );
}