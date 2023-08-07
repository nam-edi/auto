const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  state: Boolean,
  createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("tasks", TaskSchema);

async function connectToDatabase() {
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/todo?retryWrites=true&w=majority",
  );
}

async function closeDatabase() {
  await mongoose.connection.close();
}

async function clearDatabase() {
  await Task.deleteMany({});
}

async function addTask(name, state) {
  const task = new Task({
    name,
    state,
  });

  await task.save();
  return task._id;
}

async function deleteTaskById(taskId) {
  await Task.findByIdAndDelete(taskId);
}

module.exports = {
  connectToDatabase,
  closeDatabase,
  clearDatabase,
  addTask,
  deleteTaskById,
};
