const express = require("express");
var bodyParser = require("body-parser");
const db = require("./database");
const app = express();
// var cors = require("cors");

const apiPaths = require("./routes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
db.initializeMongo();

app.use(express.static("static"));

app.get("/allPath", function (req, res) {
  db.Path.find(function (err, paths) {
    if (err) return console.error(err);
    res.json(paths);
  });
});

app.use("/paths", apiPaths);

app.listen(3001, function () {
  console.log("turn on 3001");
});
