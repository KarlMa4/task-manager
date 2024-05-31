const express = require("express");
const app = express();
const port = 5000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

require("dotenv").config();

app.use(express.static("public"));

//middleware
app.use(express.json());

app.get("/Hi", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Port is listening port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
