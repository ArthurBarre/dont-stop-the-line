const express = require("express");
var bodyParser = require("body-parser");
const db = require("./database");
const app = express();
const apiPaths = require("./routes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.initializeMongo();

app.get("/", function (req, res) {
  db.Path.find(function (err, paths) {
    if (err) return console.error(err);
    res.json(paths);
  });
});

app.use("/paths", apiPaths);

app.listen(3001, function () {
  console.log("turn on 3001");
});
