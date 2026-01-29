const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// In-memory task data
let tasks = [
  {
    id: 1,
    title: "Learn Docker",
    assignedTo: "Thripthi",
    status: "In Progress",
    startDate: "2026-01-20",
    endDate: "2026-01-30",
    priority: "High",
    remarks: "Focus on Docker Compose"
  },
  {
    id: 2,
    title: "Learn GitHub Actions",
    assignedTo: "Thripthi",
    status: "Pending",
    startDate: "2026-02-01",
    endDate: "2026-02-10",
    priority: "Medium",
    remarks: "CI/CD basics"
  }
];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// GET task by ID (Task Details)
app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// ADD new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    assignedTo: req.body.assignedTo || "Unassigned",
    status: req.body.status || "Pending",
    startDate: req.body.startDate || "",
    endDate: req.body.endDate || "",
    priority: req.body.priority || "Low",
    remarks: req.body.remarks || ""
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Start server
app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
