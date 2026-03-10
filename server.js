// Import necessary modules
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Parse JSON request bodies

// In-memory storage for todos
let todos = [];
let nextId = 1;

// GET /todos - Retrieve all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST /todos - Create a new todo
app.post('/todos', (req, res) => {
  const { text } = req.body;

  // Validate input
  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Todo text is required' });
  }

  // Create new todo object
  const newTodo = {
    id: nextId++,
    text: text.trim(),
    completed: false,
  };

  // Add to todos array
  todos.push(newTodo);

  // Return the created todo
  res.status(201).json(newTodo);
});

// PUT /todos/:id - Update a todo (mark as completed)
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed, text } = req.body;

  // Find the todo by ID
  const todo = todos.find((t) => t.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  // Update completed status if provided
  if (completed !== undefined) {
    todo.completed = completed;
  }

  // Update text if provided
  if (text !== undefined) {
    todo.text = text.trim();
  }

  res.json(todo);
});

// DELETE /todos/:id - Delete a todo
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;

  // Find the index of the todo
  const index = todos.findIndex((t) => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  // Remove the todo from the array
  const deletedTodo = todos.splice(index, 1);

  res.json(deletedTodo[0]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
