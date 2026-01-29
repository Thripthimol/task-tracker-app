const params = new URLSearchParams(window.location.search);
const taskId = params.get("id");

async function loadTaskDetails() {
  try {
    const res = await fetch(`http://localhost:3000/tasks/${taskId}`);

    if (!res.ok) {
      throw new Error("Task not found");
    }

    const task = await res.json();

    document.getElementById("taskDetails").innerHTML = `
      <p><b>Title:</b> ${task.title}</p>
      <p><b>Assigned To:</b> ${task.assignedTo}</p>
      <p><b>Status:</b> ${task.status}</p>
      <p><b>Start Date:</b> ${task.startDate || "-"}</p>
      <p><b>End Date:</b> ${task.endDate || "-"}</p>
      <p><b>Priority:</b> ${task.priority}</p>
      <p><b>Remarks:</b> ${task.remarks || "-"}</p>
    `;
  } catch (error) {
    document.getElementById("taskDetails").innerHTML =
      "<p style='color:red;'>Unable to load task details</p>";
  }
}

function goBack() {
  window.location.href = "index.html";
}

loadTaskDetails();
