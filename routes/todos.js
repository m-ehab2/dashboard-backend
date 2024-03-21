const express = require("express");
const todosRouter = express.Router();
const todoController = require("../controllers/todos");

// Create a new todo
todosRouter.post("/", todoController.createTodo);

// Get all todos
todosRouter.get("/", todoController.getAllTodos);

// Get a single todo by ID
todosRouter.get("/:id", todoController.getTodoById);

// Update a todo by ID
todosRouter.patch("/:id", todoController.updateTodo);

// Delete a todo by ID
todosRouter.delete("/:id", todoController.deleteTodo);

module.exports = todosRouter;
