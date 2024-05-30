const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getSingleTask,
  upDateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(upDateTask).delete(deleteTask);

module.exports = router;
