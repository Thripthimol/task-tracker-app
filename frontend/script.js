let tasks = [];

// Load tasks from backend (initial)
fetch("http://localhost:3000/tasks")
  .then(res => res.json())
  .then(data => {
    tasks = data.map(t => t.task);
    renderTasks();
  });

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(task);
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}. ${task}`;
    list.appendChild(li);
  });
}
