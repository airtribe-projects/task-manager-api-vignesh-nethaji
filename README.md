# Task Management API

This project is a Task Management API built with Node.js and Express.js. The API supports CRUD operations for managing tasks and includes comprehensive error handling and input validation. The project structure follows best practices with separate files for routes, controllers, and models.

## Features

- Create, read, update, and delete tasks
- Input validation and error handling
- In-memory data storage
- Comprehensive test cases using `tap` and `supertest`

## Project Structure

project/
│
├── app.js
├── routes/
│   └── tasks.js
├── controllers/
│   └── taskController.js
├── models/
│   └── taskModel.js
├── task.json
└── test/
    └── server.test.js

## Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
    git clone https://github.com/airtribe-projects/task-manager-api-vignesh-nethaji.git
    cd task-manager-api-vignesh-nethaji
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

4. Run tests:
    ```bash
    npm test
    ```


## API Endpoints
### Create a Task
- Endpoint: POST /tasks
- Description: Create a new task.
- Request Body:
    ```json
    {
        "title": "New Task",
        "description": "New Task Description",
        "completed": false
    }
    ```

- Response:
    -  201 Created: Task created successfully.
    -  400 Bad Request: Invalid data.

### Get All Tasks
- Endpoint: GET /tasks
- Description: Retrieve all tasks.
- Response:
    -  200 OK: List of tasks.
### Get a Task by ID
- Endpoint: GET /tasks/:id
- Description: Retrieve a task by its ID.
- Response:
    -  200 OK: Task found.
    -  404 Not Found: Task not found.
### Update a Task by ID
- Endpoint: PUT /tasks/:id
- Description: Update a task by its ID.
- Request Body:
    ```json
    {
        "title": "Updated Task",
        "description": "Updated Task Description",
        "completed": true
    }
    ```
- Response:
    -  200 OK: Task updated successfully.
    -  400 Bad Request: Invalid data.
    -  404 Not Found: Task not found.
### Delete a Task by ID
- Endpoint: DELETE /tasks/:id
- Description: Delete a task by its ID.
- Response:
    -  200 OK: Task deleted successfully.
    -  404 Not Found: Task not found.
### Testing
- All endpoints have been tested using tap and supertest.
- Test cases cover:
    -  Creating tasks with valid and invalid data.
    -  Retrieving all tasks and individual tasks by ID.
    -  Updating tasks with valid and invalid data.
    -  Deleting tasks by ID.
- All tests pass successfully.

## Acknowledgements
- Express.js
- tap
- supertest
- uuid