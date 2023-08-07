const express = require("express");

const router = express.Router();
const tasks = require("./tasks");
const table = require("./table");

router.use("/tasks", tasks);
router.use("/table", table);

module.exports = router;
