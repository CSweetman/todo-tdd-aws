import React from 'react'

const TodoList = ({todos, setTodos}: ITodoState) => {
    return (
        <>
            {todos.map((todo, index) => <div
                data-testid="task-item"
                key={index}
                onClick={()=>setTodos(todos.filter((task)=>todo!==task))}>
                {todo}</div>)
            }
        </>
    )
}

export default TodoList