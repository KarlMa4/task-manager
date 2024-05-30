const getAllTasks = (req, res) => {
  res.send("All items from the files");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getSingleTask = (req, res) => {
  const id = req.params.id;
  res.send(`Get Task ${id}`);
};

const upDateTask = (req, res) => {
  const id = req.params.id;
  res.send(`Update Task ${id}`);
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  upDateTask,
  deleteTask,
};
