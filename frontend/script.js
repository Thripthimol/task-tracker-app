const API_URL = "http://localhost:3000/tasks";

async function fetchTasks() {
  const response = await fetch(API_URL);
  const tasks = await response.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.task;
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (!taskText) {
    alert("Task cannot be empty");
    return;
  }

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ task: taskText })
  });

  input.value = "";
  fetchTasks();
}

fetchTasks();


