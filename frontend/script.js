const API = "http://localhost:3000/tasks";

async function loadTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `
      <b>${t.title}</b><br>
      Assigned: ${t.assignedTo}<br>
      Priority: <span>${t.priority}</span>
    `;
    li.onclick = () => {
      window.location.href = `task.html?id=${t.id}`;
    };
    list.appendChild(li);
  });
}

async function addTask() {
  const title = document.getElementById("title").value;
  const assignedTo = document.getElementById("assignedTo").value;
  const priority = document.getElementById("priority").value;

  if (!title) {
    alert("Task title required");
    return;
  }

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, assignedTo, priority })
  });

  loadTasks();
}

loadTasks();



