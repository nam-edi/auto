const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  state: Boolean,
  createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("tasks", TaskSchema);

module.exports = Task;
