import { Router } from "express"
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos";

const router: Router = Router()

router.get('/todos', getTodos)

router.get('/add-todo', addTodo)

router.get('/update-todo/:id', updateTodo)

router.get('/delete-todo/:id', deleteTodo)

export default router 