var express = require("express");
var utils=require('../utils/util');
var router = express.Router();

/* POST api listing. */
router.post("/", function (req, res, next) {
  res.send("respond with a api resource");
});
router.post("/user", function (req, res, next) {
  res.send({ id: 1, name: 'xiaoming' });
});
router.post("/analyze", function (req, res, next) {
  utils(req.param('url'))
  res.send({ status: 0, dest: 'start' });
});

module.exports = router;
