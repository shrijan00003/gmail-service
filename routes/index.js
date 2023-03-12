var express = require("express");
var router = express.Router();
var auth = require("./google-auth");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/auth", function (req, res, next) {
  // console.log("auth", auth.auth_callback);
  res.render("index", auth.auth_init);
});

module.exports = router;
