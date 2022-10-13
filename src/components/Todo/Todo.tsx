import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'

const Todo = () => {
    
    const[todos, setTodos] = useState<string[]>([])

    return (
        <>
            <AddTodo todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    )
}

export default Todo