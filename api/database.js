const mongoose = require("mongoose");

const DATABASE_CONNECTION = "mongodb://mongo/test";

var PathSchema = mongoose.Schema({
  userId: Number,
  paths: Array,
});

Path = exports.Path = mongoose.model("Path", PathSchema);

exports.initializeMongo = function () {
  mongoose.connect(DATABASE_CONNECTION);
  console.log("connecting to " + DATABASE_CONNECTION);
  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", function () {
    console.log("connected");
  });
};

exports.addNewPath = (userId, obj) => {
  var newPath = new Path({
    userId,
    paths: obj,
  });
  newPath.save(function (err, path) {
    if (err) return console.error(err);
    console.log("new path registered");
  });
};
