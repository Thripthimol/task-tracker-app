const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/tasks", (req, res) => {
  res.json([
    { id: 1, task: "Learn Docker" },
    { id: 2, task: "Learn GitHub Actions" }
  ]);
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
