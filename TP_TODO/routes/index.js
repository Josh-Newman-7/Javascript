const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');

router.get('/', controller.getTodos);
router.get('/todos/new', controller.showCreateTodoForm);
router.post('/todos', controller.createTodo);
router.get('/todos/:id', controller.getTodoById);
router.get('/todos/:id/edit', controller.showEditTodoForm);
router.post('/todos/:id', controller.updateTodo);
router.post('/todos/:id/delete', controller.deleteTodo);

module.exports = router;
