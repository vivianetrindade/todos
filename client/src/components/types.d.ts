
type Todo = {
  id: string,
  title: string,
  description: string,
  completed: boolean
}

type AddTodo = (todo: Todo) => void;
type ToogleTodo = (id:string) => void;
type DeleteTodo = (id:string) => void;
