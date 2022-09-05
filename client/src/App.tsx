import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import './App.css'


function App() {
  const [todos, setTodos] = useState<Todo []>([]);

  useEffect(() => {
    console.log( 'effect')
     fetch('http://localhost:8080/todos')
      .then(res => console.log(res))
      // .then(data => console.log(data));
  }, []);

  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos)
    console.log(todos);
  }

  const toogleTodo = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toogleTodo={toogleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
