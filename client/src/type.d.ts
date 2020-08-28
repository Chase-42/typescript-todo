interface TypeTodo {
	_id: string;
	name: string;
	description: string;
	status: boolean;
	createdAt?: string;
	updatedAt?: string;
}

type TodoProps = {
	todo: TypeTodo;
};

type ApiDataType = {
	message: string;
	status: string;
	todos: TypeTodo[];
	todo?: TypeTodo;
};
