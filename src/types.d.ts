interface IHeader {
    title: string
}

interface ITodoState {
    todos: Array<string>,
    setTodos: React.Dispatch<React.SetStateAction<Array<string>>>
}