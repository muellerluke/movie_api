const express = require("express"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  uuid = require("uuid");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(morgan("common"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Sumthin broked");
});

app.get("/movies", (req, res) => {
  res.send("Successful GET request returning data on all movies");
});

app.get("/movies/:title", (req, res) => {
  res.send("Successful GET request returning data on the specific title");
});

app.get("/movies/:title/genre", (req, res) => {
  res.send(
    "Successful GET request returning a description of the genre of the specified movie"
  );
});

app.get("/directors/:name", (req, res) => {
  res.send(
    "Successful GET request returning data about a director (bio, birth year, death year)"
  );
});

app.post("/users/signup", (req, res) => {
  newUser = req.body;

  if (!newUser.username) {
    const message = "Missing username in request body";
    res.status(400).send(message);
  } else {
    newStudent.id = uuid.v4();
    res.status(201).send(newStudent);
  }
});

app.put("/users/:username/account", (req, res) => {
  res.send("Successful PUT request updating the user's information");
});

app.post("/users/:username/favorites/:title", (req, res) => {
  res.send(
    "Successful POST request adding the movie to the user's favorite list"
  );
});

app.delete("/users/:username/favorites/:title", (req, res) => {
  res.send(
    "Successful DELETE request removing the movie from the user's favorite list"
  );
});

app.delete("/users/:username/account", (req, res) => {
  res.send("Successful DELETE request deregistering the user's accont");
});

app.listen(8080, () =>
  console.log("Listening on port 8080; https://localhost:8080")
);
