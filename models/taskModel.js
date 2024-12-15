let tasks = require('../task.json').tasks;

// Create a new task
exports.createTask = (title, description, completed) => {
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        completed
    };
    tasks.push(newTask);
    return newTask;
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
exports.updateTaskById = (id, title, description, completed) => {
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return null;
    }
    task.title = title;
    task.description = description;
    task.completed = completed;
    return task;
};

// Delete a task by ID
exports.deleteTaskById = (id) => {
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) {
        return false;
    }
    tasks.splice(taskIndex, 1);
    return true;
};