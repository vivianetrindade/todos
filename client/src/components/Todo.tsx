import React, { useEffect, useState } from "react";

interface TodoProps {
  todo: Todo
  toogleTodo: ToogleTodo
  deleteTodo: DeleteTodo
}
const Todo: React.FC<TodoProps> = ({ todo, toogleTodo, deleteTodo }) => {
  const [ isCompleted, setIsCompleted ] = useState<string>('container__ todo');
  const [ toogleCompleted, setToogleCompleted ] = useState<string>('todo--toggle');
  const [ showDeleteButton, setShowDeleteButton ] = useState(todo.completed);

  useEffect(() => {
    if (todo.completed) {
      setIsCompleted('container__ todo--completed');
      setToogleCompleted ('todo--toggle-completed');
    } else {
      setIsCompleted('container__ todo');
      setToogleCompleted('todo--toggle');
    }
  }, [todo.completed])
  
  const todoHandleClick = () =>{
    toogleTodo(todo.id);
    setShowDeleteButton(!showDeleteButton);
  }

  const handleDelete = () => {
    deleteTodo(todo.id);
  }
return (
  <div className={isCompleted} >
    <div className={toogleCompleted} 
    key={todo.id}
    onClick={todoHandleClick}>
        <h3 className="todoitem__item">{todo.title}</h3>
        <p>{todo.description}</p>
    </div>
    {showDeleteButton && <button className="todo__button--remove"
    onClick={handleDelete}>Delete</button>}
  </div>
)
}

export default Todo;