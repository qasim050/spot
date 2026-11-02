
const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Express.js!");
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Qasim" },
    { id: 2, name: "Ahmed" },
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
