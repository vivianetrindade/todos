import { Router } from 'express';
import { createTodo, getTodos, deleteTodos, patchTodos } from '../controllers/todosControllers'

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', patchTodos);

router.delete('/:id', deleteTodos);

export default router;