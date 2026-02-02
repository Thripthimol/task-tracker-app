const request = require("supertest");
const app = require("../index");

describe("Task API", () => {

  it("GET /tasks should return list of tasks", async () => {
    const res = await request(app).get("/tasks");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /tasks/1 should return a task", async () => {
    const res = await request(app).get("/tasks/1");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });

  it("POST /tasks should create a new task", async () => {
    const newTask = {
      title: "Write CI tests",
      assignedTo: "Thripthi",
      priority: "High"
    };

    const res = await request(app)
      .post("/tasks")
      .send(newTask);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("title", "Write CI tests");
  });

});
