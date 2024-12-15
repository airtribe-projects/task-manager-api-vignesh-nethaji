const express = require('express');
const app = express();
const port = 3000;
const taskRoutes = require('./routes/tasks');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use task routes
app.use('/tasks', taskRoutes);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);

    // Set status code based on error type
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
    }
    if (err.name === 'NotFoundError') {
        return res.status(404).json({ error: err.message });
    }

    // Default to 500 Internal Server Error
    res.status(500).json({ error: 'Something went wrong!' });
});


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;