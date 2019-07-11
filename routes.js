/* eslint-disable new-cap */
/* eslint-disable capitalized-comments */
let router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { name: "Home | GAGS" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { name: "Contact | GAGS" });
});

router.get("/about", (req, res) => {
  res.render("about", { name: "About Us | GAGS" });
});
// Controllers -----

module.exports = router;
