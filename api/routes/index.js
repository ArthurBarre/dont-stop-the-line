const express = require("express");
const db = require("../database");
const router = express.Router();

router.post("/addPath", async (req, res) => {
  var userId = req.body.userId;
  var paths = req.body.paths;

  try {
    let results = await db.addNewPath(userId, paths);
    res.json(results);
  } catch (e) {
    res.send({
      code: 404,
      message: "error ocurred routes",
    });
  }
});

router.get("/getPath", function (req, res) {
  db.Path.find(function (err, paths) {
    if (err) return console.error(err);
    res.json(paths);
  });
});
router.get("/getPathId", function (req, res) {
  const userId = req.query.userId;
  const result = db.Path.find({}, { userId });
  console.log(result);
  return res.json(result);
});
module.exports = router;
