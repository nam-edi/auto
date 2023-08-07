const Task = require("../models/task.js");

const getTasks = (req, res) => {
  Task.find({})
    .sort({ state: 1, createdAt: -1 }) // Trie d'abord par state (ascendant) puis par createdAt (descendant)
    /* #swagger.responses[200] = {
            description: 'Tasks successfully retrieved.',
            schema: {
                "task": [{
                    "_id": "64c6b6aa0e597f79beda528a",
                    "name": "task1",
                    "state": false,
                    "createdAt": "2023-07-30T19:14:50.378Z",
                    "__v": 0
                }]
            }
        } */
    .then((tasks) => res.status(200).json({ tasks: tasks }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const createTask = (req, res) => {
  /*  #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                $name: 'task1',
                $state: false,
            }
    } */
  Task.create(req.body)
    /* #swagger.responses[200] = {
            description: 'Task successfully created.',
            schema: {
                "task": {
                    "_id": "64c6b6790e597f79beda5274",
                    "name": "task1",
                    "state": true,
                    "createdAt": "2023-07-30T19:14:01.652Z",
                    "__v": 0
                }
                }
        } */
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const deleteTask = (req, res) => {
  Task.findOneAndDelete({ _id: req.params.taskID })
    /* #swagger.responses[200] = {
            description: 'Task successfully deleted.',
        } */
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const updateTask = (req, res) => {
  const taskId = req.params.taskID;
  const { name, state } = req.body;

  /*  #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                $name: 'task1',
                $state: false,
            }
    } */
  Task.findByIdAndUpdate(taskId, { name, state }, { new: true })
    .then((updatedTask) => {
      if (!updatedTask) {
        return res.status(404).json({ msg: "Task not found" });
      }
      /* #swagger.responses[200] = {
                description: 'Task successfully updated.',
                schema: {
                    "task": {
                        "_id": "64c6b6790e597f79beda5274",
                        "name": "task1",
                        "state": true,
                        "createdAt": "2023-07-30T19:14:01.652Z",
                        "__v": 0
                    }
                }
            } */
      res.status(200).json({ task: updatedTask });
    })
    .catch((error) => res.status(500).json({ msg: error }));
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};
