const express = require("express");

const router = express.Router();
const Task = require("../controllers/tasks.js");

router.get("/", (req, res) => {
  Task.getTasks(req, res);
});

router.post("/", (req, res) => {
  Task.createTask(req, res);
});

router.put("/:taskID", (req, res) => {
  Task.updateTask(req, res);
});

router.delete("/:taskID", (req, res) => {
  Task.deleteTask(req, res);
});

module.exports = router;
