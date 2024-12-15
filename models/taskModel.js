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
exports.getAllTasks = async () => {
    return new Promise((resolve) => resolve(tasks));
};

// Get a task by ID
exports.getTaskById = async (id) => {
    // Validate the id parameter
    if (typeof id !== 'string' || !id.match(/^[0-9a-fA-F]{24}$/)) {
        return new Promise((resolve) => resolve(null));
    }
    const task = tasks.find(t => t.id === id);
    return new Promise((resolve) => resolve(task));
};

// Update a task by ID
exports.updateTaskById = async (id, title, description, completed) => {
    // Validate the id parameter
    if (typeof id !== 'string' || !id.match(/^[0-9a-fA-F]{24}$/)) {
        return new Promise((resolve) => resolve(null));
    }
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return new Promise((resolve) => resolve(null));
    }
    // Validate new values
    if (typeof title !== 'undefined') {
        task.title = title;
    }
    if (typeof description !== 'undefined') {
        task.description = description;
    }
    if (typeof completed !== 'undefined' && typeof completed === 'boolean') {
        task.completed = completed;
    }
    return new Promise((resolve) => resolve(task));
};

// Delete a task by ID
exports.deleteTaskById = async (id) => {
    // Validate the id parameter
    if (typeof id !== 'string' || !id.match(/^[0-9a-fA-F]{24}$/)) {
        return new Promise((resolve) => resolve(false));
    }
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) {
        return new Promise((resolve) => resolve(false));
    }
    tasks.splice(taskIndex, 1);
    return new Promise((resolve) => resolve(true));
};
