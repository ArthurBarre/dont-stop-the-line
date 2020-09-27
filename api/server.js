const express = require("express");
var bodyParser = require("body-parser");
const db = require("./database");
const app = express();
// var cors = require("cors");

const apiPaths = require("./routes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());

db.initializeMongo();
app.applyMiddleware({
  cors: {
    origin: "http://127.0.0.1:5500/",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  },
});
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
