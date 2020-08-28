import axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'http://localhost:4000';

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const todos: AxiosResponse<ApiDataType> = await axios.get(baseUrl + '/todos');
		return todos;
	} catch (error) {
		throw new Error(error);
	}
};

export const addTodo = async (
	formData: TypeTodo
): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const todo: Omit<TypeTodo, '_id'> = {
			name: formData.name,
			description: formData.description,
			status: false,
		};
		const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
			baseUrl + '/add-todo',
			todo
		);
		return saveTodo;
	} catch (error) {
		throw new Error(error);
	}
};

export const updateTodo = async (
	todo: TypeTodo
): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const todoUpdate: Pick<TypeTodo, 'status'> = {
			status: true,
		};
		const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
			`${baseUrl}/edit-todo/${todo._id}`,
			todoUpdate
		);
		return updatedTodo;
	} catch (error) {
		throw new Error(error);
	}
};

export const deleteTodo = async (
	_id: string
): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
			`${baseUrl}/delete-todo/${_id}`
		);
		return deletedTodo;
	} catch (error) {
		throw new Error(error);
	}
};
