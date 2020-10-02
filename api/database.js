const mongoose = require("mongoose");

const DATABASE_CONNECTION = "mongodb://mongo:27017/expressmongo";

var PathSchema = mongoose.Schema({
  userId: Number,
  paths: Array,
});

Path = exports.Path = mongoose.model("Path", PathSchema);

exports.initializeMongo = function () {
  mongoose.connect("mongodb://mongo:27017", { useNewUrlParser: true });
  console.log("connecting to " + DATABASE_CONNECTION);
  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", function () {
    console.log("connected");
  });
};

exports.addNewPath = (userId, obj) => {
  // var myquery = { userId: 122 };
  // var newvalues = {
  //   $set: {
  //     paths: [
  //       {
  //         hello: "world2",
  //       },
  //     ],
  //   },
  // };
  // dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
  Path.count({ userId: userId }, function (err, count) {
    if (count > 0) {
      Path.updateOne(
        { userId: userId },
        {
          $set: {
            paths: obj,
          },
        },
        function (err, res) {
          if (err) throw err;
          console.log(res);
        }
      );
    } else {
      var newPath = new Path({
        userId,
        paths: obj,
      });
      newPath.save(function (err, path) {
        if (err) return console.error(err);
        console.log("new path registered");
      });
    }
  });
};
