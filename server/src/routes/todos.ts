import { Router } from 'express';
import { createTodo, getTodos, deleteTodos } from '../controllers/todosControllers'

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.delete('/:id', deleteTodos);

export default router;