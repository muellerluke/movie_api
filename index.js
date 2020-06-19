const express = require("express"),
  morgan = require("morgan");

const app = express();

let topMovies = [
  {
    title: "The Social Network",
    year: 2010,
  },
  {
    title: "Batman Begins",
    year: 2005,
  },
  {
    title: "Iron Man",
    year: 2008,
  },
  {
    title: "Iron Man 2",
    year: 2010,
  },
  {
    title: "The Accountant",
    year: 2016,
  },
  {
    title: "Avengers: Infinity War",
    year: 2018,
  },
  {
    title: "The Wolf of Wall Street",
    year: 2003,
  },
  {
    title: "Greater",
    year: 2016,
  },
  {
    title: "Lone Survivor",
    year: 2013,
  },
  {
    title: "Avengers: End Game",
    year: 2019,
  },
];

app.use(express.static("public"));
app.use(morgan("common"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Sumthin broked");
});

app.get("/movies", (req, res) => {
  res.json(topMovies);
});

app.get("/", (req, res) => {
  res.send("Welcome to my movie api!");
});

app.listen(8080, () =>
  console.log("Listening on port 8080; https://localhost:8080")
);
