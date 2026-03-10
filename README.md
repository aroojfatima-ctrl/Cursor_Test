# 📝 Full-Stack Todo List Application

A simple, modern, and responsive Todo List web application built with React, Node.js, and Express.

## 📋 Project Structure

```
todo-app/
├── server.js                 # Backend Express server
├── package.json             # Backend dependencies
├── .gitignore              # Git ignore rules
└── frontend/               # React frontend
    ├── src/
    │   ├── App.jsx         # Main React component
    │   ├── App.css         # Component styles
    │   └── index.jsx       # React entry point
    ├── public/
    │   └── index.html      # HTML template
    ├── package.json        # Frontend dependencies
    └── vite.config.js      # Vite configuration
```

## ✨ Features

- ✅ Add Todos
- ✅ Mark Complete
- ✅ Delete Todos
- ✅ View All Todos
- ✅ Responsive Design
- ✅ Clean UI

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Install Backend Dependencies
```bash
npm install
```

2. Install Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

## 🏃 Running the Application

### Start Backend (Terminal 1)
```bash
npm start
```
Backend runs on http://localhost:5000

### Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
Frontend runs on http://localhost:3000

## 📡 API Endpoints

- GET /todos - Get all todos
- POST /todos - Create new todo
- PUT /todos/:id - Update todo
- DELETE /todos/:id - Delete todo

## 💻 Technology Stack

### Backend
- Node.js
- Express
- CORS

### Frontend
- React
- Vite
- CSS3