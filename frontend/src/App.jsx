import React, { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('https://api.example.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const handleAddTodo = () => {
    if (newTodo) {
      fetch('https://api.example.com/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ text: newTodo }),
      })
      .then(response => response.json())
      .then(todo => setTodos([...todos, todo]));
      setNewTodo(''); // Reset input field
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;