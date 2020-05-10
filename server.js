const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./Models/User");
const user = require("./routes/api/user");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/MovieApp", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected.."))
  .catch((err) => console.log(err));

app.use("/api/user", user);

const port = 5008;

app.listen(port, () => {
  console.log(`Server started at ${port}.`);
});
