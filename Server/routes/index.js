var express = require("express");
var router = express.Router();
var fs = require("fs");
/* GET home page. */
router.get("/", function(req, res, next) {
  let html = fs.readFile(
    path.resolve(__dirname, "../dist/index.html"),
    "utf-8"
  );
  res.send(html);
});

module.exports = router;
