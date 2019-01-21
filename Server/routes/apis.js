var express = require("express");
var router = express.Router();

/* POST api listing. */
router.post("/", function(req, res, next) {
  res.send("respond with a api resource");
});

module.exports = router;
