const { v4: uuidv4 } = require('uuid');
let tasks = require('../task.json').tasks;

// Create a new task
exports.createTask = async (title, description, completed) => {
    const newTask = {
        id: uuidv4(), // Generate a unique ID using UUID
        title,
        description,
        completed
    };
    tasks.push(newTask);
    return new Promise((resolve) => resolve(newTask));
};

// Get all tasks
exports.getAllTasks = () => {
    return tasks;
};

// Get a task by ID
exports.getTaskById = (id) => {
    return tasks.find(t => t.id === id);
};

// Update a task by ID
exports.updateTaskById = async (id, title, description, completed) => {
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return null;
    }
    task.title = title;
    task.description = description;
    task.completed = completed;
    return new Promise((resolve) => resolve(task));
};

// Delete a task by ID
exports.deleteTaskById = async (id) => {
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) {
        return false;
    }
    tasks.splice(taskIndex, 1);
    return new Promise((resolve) => resolve(true));
};