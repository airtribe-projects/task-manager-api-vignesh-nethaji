const tap = require("tap");
const supertest = require("supertest");
const app = require("../app");
const server = supertest(app);

// Test case for creating a new task
tap.test("POST /tasks", async (t) => {
  const newTask = {
    title: "New Task",
    description: "New Task Description",
    completed: false,
  };
  // Send POST request to create a new task
  const response = await server.post("/tasks").send(newTask);
  // Check if the response status is 201 (Created)
  t.equal(response.status, 201);
  t.end();
  console.info("Case 1::Success::Creating a new task");
});

// Test case for creating a task with invalid data
tap.test("POST /tasks with invalid data", async (t) => {
  const newTask = {
    title: "New Task",
  };
  // Send POST request with incomplete data
  const response = await server.post("/tasks").send(newTask);
  // Check if the response status is 400 (Bad Request)
  t.equal(response.status, 400);
  t.end();
  console.info("Case 2::Success::Creating a task with invalid data");
});

// Test case for retrieving all tasks
tap.test("GET /tasks", async (t) => {
  // Send GET request to retrieve all tasks
  const response = await server.get("/tasks");
  // Check if the response status is 200 (OK)
  t.equal(response.status, 200);
  // Validate the structure of the first task in the response
  t.hasOwnProp(response.body[0], "id");
  t.hasOwnProp(response.body[0], "title");
  t.hasOwnProp(response.body[0], "description");
  t.hasOwnProp(response.body[0], "completed");
  t.type(response.body[0].id, "number");
  t.type(response.body[0].title, "string");
  t.type(response.body[0].description, "string");
  t.type(response.body[0].completed, "boolean");
  t.end();
  console.info("Case 3::Success::Retrieving all tasks");
});

// Test case for retrieving a task by ID
tap.test("GET /tasks/:id", async (t) => {
  // Send GET request to retrieve a task by ID
  const response = await server.get("/tasks/1");
  // Check if the response status is 200 (OK)
  t.equal(response.status, 200);
  // Define the expected task structure
  const expectedTask = {
    id: 1,
    title: "Set up environment",
    description: "Install Node.js, npm, and git",
    completed: true,
  };
  // Validate the response body matches the expected task
  t.match(response.body, expectedTask);
  t.end();
  console.info("Case 4::Success::Retrieving a task by ID");
});

// Test case for retrieving a task with an invalid ID
tap.test("GET /tasks/:id with invalid id", async (t) => {
  // Send GET request with an invalid ID
  const response = await server.get("/tasks/999");
  // Check if the response status is 404 (Not Found)
  t.equal(response.status, 404);
  t.end();
  console.info("Case 5::Success::Retrieving a task with an invalid ID");
});

// Test case for updating a task by ID
tap.test("PUT /tasks/:id", async (t) => {
  const updatedTask = {
    title: "Updated Task",
    description: "Updated Task Description",
    completed: true,
  };
  // Send PUT request to update a task by ID
  const response = await server.put("/tasks/1").send(updatedTask);
  // Check if the response status is 200 (OK)
  t.equal(response.status, 200);
  t.end();
  console.info("Case 6::Success::Update a task by ID");
});

// Test case for updating a task with an invalid ID
tap.test("PUT /tasks/:id with invalid id", async (t) => {
  const updatedTask = {
    title: "Updated Task",
    description: "Updated Task Description",
    completed: true,
  };
  // Send PUT request with an invalid ID
  const response = await server.put("/tasks/999").send(updatedTask);
  // Check if the response status is 404 (Not Found)
  t.equal(response.status, 404);
  t.end();
  console.info("Case 7::Success::Updating a task with an invalid ID");
});

// Test case for updating a task with invalid data
tap.test("PUT /tasks/:id with invalid data", async (t) => {
  const updatedTask = {
    title: "Updated Task",
    description: "Updated Task Description",
    completed: "true", // Invalid data type for 'completed'
  };
  // Send PUT request with invalid data
  const response = await server.put("/tasks/1").send(updatedTask);
  // Check if the response status is 400 (Bad Request)
  t.equal(response.status, 400);
  t.end();
  console.info("Case 8::Success::Updating a task with invalid data");
});

// Test case for deleting a task by ID
tap.test("DELETE /tasks/:id", async (t) => {
  // Send DELETE request to delete a task by ID
  const response = await server.delete("/tasks/1");
  // Check if the response status is 200 (OK)
  t.equal(response.status, 200);
  t.end();
  console.info("Case 9::Success::Deleting a task by ID");
});

// Test case for deleting a task with an invalid ID
tap.test("DELETE /tasks/:id with invalid id", async (t) => {
  // Send DELETE request with an invalid ID
  const response = await server.delete("/tasks/999");
  // Check if the response status is 404 (Not Found)
  t.equal(response.status, 404);
  t.end();
  console.info("Case 10::Success::Deleting with an invalid ID");
});

// Teardown to exit the process after tests
tap.teardown(() => {
  process.exit(0);
});