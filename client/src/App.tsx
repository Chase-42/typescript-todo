import React, { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';
import AddTodo from './components/TodoItem';
import { getTodos, addTodo, updateTodo, deleteTodo } from './API';

const App: React.FC = () => {
	const [todos, setTodos] = useState<TypeTodo[]>([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = (): void => {
		getTodos()
			.then(({ data: { todos } }: TypeTodo[] | any) => setTodos(todos))
			.catch((err: Error) => console.log(err));
	};

	const handleSaveTodo = (e: React.FormEvent, formData: TypeTodo): void => {
		e.preventDefault();
		addTodo(formData)
			.then(({ status, data }) => {
				if (status !== 201) {
					throw new Error('Error! Todo not saved');
				}
				setTodos(data.todos);
			})
			.catch((err) => console.log(err));
	};
};

export default App;
