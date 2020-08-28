import { Response, Request } from 'express';
import { TypeTodo } from './../../types/todo';
import Todo from '../../models/todo';

const getTodos = async (req: Request, res: Response): Promise<void> => {
	try {
		const todos: TypeTodo[] = await Todo.find();
		res.status(200).json({ todos });
	} catch (error) {
		throw error;
	}
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const body = req.body as Pick<TypeTodo, 'name' | 'description' | 'status'>;
		const todo: TypeTodo = new Todo({
			name: body.name,
			description: body.description,
			status: body.status,
		});

		const newTodo: TypeTodo = await todo.save();
		const allTodos: TypeTodo[] = await Todo.find();

		res
			.status(201)
			.json({ message: 'Todo added', todo: newTodo, todos: allTodos });
	} catch (error) {
		throw error;
	}
};

const updateTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const {
			params: { id },
			body,
		} = req;
		const updateTodo: TypeTodo | null = await Todo.findByIdAndUpdate(
			{ _id: id },
			body
		);
		const allTodos: TypeTodo[] = await Todo.find();
		res.status(200).json({
			message: 'Todo updated',
			todo: updateTodo,
			todos: allTodos,
		});
	} catch (error) {
		throw error;
	}
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
	try {
		const deletedTodo: TypeTodo | null = await Todo.findByIdAndRemove(
			req.params.id
		);
		const allTodos: TypeTodo[] = await Todo.find();
		res.status(200).json({
			message: 'Todo deleted',
			todo: deletedTodo,
			todos: allTodos,
		});
	} catch (error) {
		throw error;
	}
};

export { getTodos, addTodo, updateTodo, deleteTodo };
