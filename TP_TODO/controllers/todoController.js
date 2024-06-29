const Todo = require('../models/todo');

// Afficher tous les todos
exports.getTodos = async (req, res) => {
    console.log("hello")
    try {
        const todos = await Todo.find();
        res.render('todoList', { todos });
    } catch (error) {
        console.log("erreur");
        res.status(500).send(error);
    }
};

// Afficher un todo spécifique
exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.render('todoDetail', { todo });
    } catch (error) {
        res.status(500).send(error);
    }
};

// Afficher le formulaire de création de todo
exports.showCreateTodoForm = (req, res) => {
    res.render('addTodo');
};

// Créer un nouveau todo
exports.createTodo = async (req, res) => {
    try {
        const todo = new Todo({
            title: req.body.title,
            description: req.body.description,
        });
        await todo.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error);
    }
};

// Afficher le formulaire d'édition de todo
exports.showEditTodoForm = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.render('editTodo', { todo });
    } catch (error) {
        res.status(500).send(error);
    }
};

// Mettre à jour un todo existant
exports.updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect(`/todos/${todo.id}`);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Supprimer un todo
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndRemove(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error);
    }
};
