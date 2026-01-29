// Auth check
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

async function fetchTasks() {
  const res = await fetch("http://localhost:3000/tasks");
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerText = task.title;
    li.onclick = () => {
      window.location.href = `task.html?id=${task.id}`;
    };
    list.appendChild(li);
  });
}

async function addTask() {
  const task = document.getElementById("taskInput").value;

  await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: task,
      assignedTo: "User",
      status: "Open",
      priority: "Medium"
    })
  });

  document.getElementById("taskInput").value = "";
  fetchTasks();
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

fetchTasks();
