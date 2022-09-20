import React, { ChangeEvent, FormEvent, useState } from "react";
import {v4 as uuid} from 'uuid';

const initialTodo: Todo = 
  {
    id: '',
    title: '',
    description: '',
    completed: false
  }
 interface Props {
  addTodo: AddTodo;
 }
const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState(initialTodo);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.title.trim()){
      addTodo ({...todo,
        id: uuid() 
      })
      setTodo({...todo, title:'', description:''})
    }
  }
  return (
    <section className='section__createTodo'>
      <h2 className="todoadd__title">Register New Todo</h2>
      <form onSubmit={handleSubmit} action="" className="form__todolist">
        <label className="todo__title">Title</label>
        <input type="text"
          name="title"
          placeholder="Todo Title"
          value={todo.title}
          onChange={handleChange}/>
        <label className="todo__description">Description</label>
        <input type="text"
          name="description"
          placeholder="Todo Description"
          value={todo.description}
          onChange={handleChange}/>
        <button type="submit"
          id="btnAddTodo"
          className="button__addtodo">Add Todo</button>
      </form>
    </section>
  )
}

export default TodoForm;