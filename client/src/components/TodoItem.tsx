interface TypeTodo {
    _id: string 
    name: string 
    status: boolean
    createdAt?: string 
    updatedAt?: string
}

interface TodoProps {
    todo: TypeTodo
}

type ApiDataType = {
    message: string
    status: string 
    todos: TypeTodo[]
    todo?: TypeTodo
}