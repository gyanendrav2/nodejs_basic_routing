const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.use("/home", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

router.use("/product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "product.html"));
});

module.exports = router;
