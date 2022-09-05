import React from "react";
import Todo from './Todo'

interface TodosListProps {
  todos: Todo[]
  toogleTodo: ToogleTodo
  deleteTodo: DeleteTodo
}

const TodoList: React.FC<TodosListProps>  = ({ todos, toogleTodo, deleteTodo }) =>{

  return (
    <section className="container__todoList" id="todoList">
      {todos.map(todo =>
      <Todo 
        key={todo.id}
        todo={todo}
        toogleTodo={toogleTodo}
        deleteTodo={deleteTodo}/>)}
    </section>
  )
}
export default TodoList