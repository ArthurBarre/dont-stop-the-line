const mongoose = require("mongoose");

const DATABASE_CONNECTION = "mongodb://db:27017/test";

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
};
