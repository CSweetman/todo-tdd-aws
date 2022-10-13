import React, { useState } from 'react'

const AddTodo = ({ todos, setTodos }: ITodoState) => {

    const [todo, setTodo] = useState('')

    const addTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const updatedTodos = [
            ...todos,
            todo
        ]

        setTodos(updatedTodos)
        setTodo("")
    }

    return (
        <div>
        <input type="text" placeholder='Insert task...' value={todo} onChange={e => setTodo(e.target.value)} />
            <button onClick={addTodo}>Submit</button>
        </div>
    )
}

export default AddTodo