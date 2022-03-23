const express = require("express");
const router = express.Router();

let { people } = require("../../Express/data");

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) res.status(200).send(`POST: ${name}`);
  else res.status(401).send("Invalid");
});

module.exports = router;
