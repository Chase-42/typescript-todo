import axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'http://localhost:5000';

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todos: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + '/todos'
        )
        return todos
    } catch (error) {
        throw new Error(error)
    }
}

export const addTodo = async (
    formData: TypeTodo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: Omit<TypeTodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    }
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
        baseUrl + '/add-todo',
        todo
    )
    return saveTodo
    } catch (error) {
        throw new Error(error)
    }
}
