const express = require("express");
const app = express();
const port = 5000;
app.use(express.static("public"));

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.put('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/api/v1/tasks", (req, res) => {
  res.send("hi");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.listen(port, () => {
  console.log(`Port is listening port ${port}`);
});
