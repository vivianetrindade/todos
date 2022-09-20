import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import './App.css'


function App() {
  const [todos, setTodos] = useState<Todo []>([]);

  useEffect(() => {
     fetch('http://localhost:8080/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(error => console.log(error));
  }, []);

  const addTodo = (todo: Todo) => {
    fetch('http://localhost:8080/todos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(res => res.json())
    .then(data => data)
    const newTodos = [...todos, todo];
    setTodos(newTodos)
  }

  const toogleTodo = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        fetch(`http://localhost:8080/todos/${id}`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(todo)
        })
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const deleteTodo = (id: string) => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
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
