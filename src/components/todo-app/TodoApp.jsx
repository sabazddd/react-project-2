import { useState } from "react"
import TodoItem from "./TodoItem"

export default function TodoApp() {
    const [todos, setTodos] = useState([])
    const [inputVal, setInputVal] = useState("")

    function handleAddTodo() {
        if (inputVal.trim() === "") return

        const newTodo = {
            id: Math.floor(Math.random() * 100000),
            title: inputVal,
        }

        setTodos([...todos, newTodo])
        setInputVal("") // خالی شدن input
    }

    function handleDeleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    function handleEditTodo(id, newTitle) {
    setTodos(
        todos.map(todo =>
            todo.id === id
                ? { ...todo, title: newTitle }
                : todo
        )
    )
}


    return (
        <>
            <input
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                type="text"
            />
            <button onClick={handleAddTodo}>add todo</button>

            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        onDelete={handleDeleteTodo}
                         onEdit={handleEditTodo}
                    />
                ))}
            </ul>
        </>
    )
}
