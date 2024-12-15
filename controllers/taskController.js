const taskModel = require('../models/taskModel');

// Create a new task
exports.createTask = (req, res) => {
    const { title, description, completed } = req.body;
    if (!title || !description || typeof completed !== 'boolean') {
        return res.status(400).send('Invalid data');
    }
    const newTask = taskModel.createTask(title, description, completed);
    res.status(201).json(newTask);
};

// Get all tasks
exports.getAllTasks = (req, res) => {
    const tasks = taskModel.getAllTasks();
    res.status(200).json(tasks);
};

// Get a task by ID
exports.getTaskById = (req, res) => {
    const task = taskModel.getTaskById(parseInt(req.params.id));
    if (!task) {
        return res.status(404).send('Task not found');
    }
    res.status(200).json(task);
};

// Update a task by ID
exports.updateTaskById = (req, res) => {
    const { title, description, completed } = req.body;
    if (!title || !description || typeof completed !== 'boolean') {
        return res.status(400).send('Invalid data');
    }
    const updatedTask = taskModel.updateTaskById(parseInt(req.params.id), title, description, completed);
    if (!updatedTask) {
        return res.status(404).send('Task not found');
    }
    res.status(200).json(updatedTask);
};

// Delete a task by ID
exports.deleteTaskById = (req, res) => {
    const deleted = taskModel.deleteTaskById(parseInt(req.params.id));
    if (!deleted) {
        return res.status(404).send('Task not found');
    }
    res.status(200).send('Task deleted successfully');
};