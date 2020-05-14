const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./Models/User");
const user = require("./routes/api/user");
const movies = require("./routes/api/movies");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/MovieApp", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected.."))
  .catch((err) => console.log("here", err));

app.use("/api/user", user);
app.use("/api/movies", movies);
app.use("/api/auth", require("./routes/api/auth"));

const port = 5008;

app.listen(port, () => {
  console.log(`Server started at ${port}.`);
});
