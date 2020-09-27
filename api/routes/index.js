const express = require("express");
const db = require("../database");
const router = express.Router();

router.post("/addPath", async (req, res) => {
  var userId = req.body.userId;
  var path = req.body.path;

  try {
    let results = await db.addNewPath(userId, path);
    res.json(results);
  } catch (e) {
    res.send({
      code: 404,
      message: "error ocurred",
    });
  }
});

router.get("/getPath", function (req, res) {
  db.Path.find(function (err, paths) {
    if (err) return console.error(err);
    res.json(paths);
  });
});
module.exports = router;
