const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./Models/User");
const user = require("./routes/api/user");
const movies = require("./routes/api/movies");
const path = require("path");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/MovieApp", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected.."))
  .catch((err) => console.log("here", err));

app.use("/api/user", user);
app.use("/api/movies", movies);
app.use("/api/auth", require("./routes/api/auth"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5008;

app.listen(port, () => {
  console.log(`Server started at ${port}.`);
});
