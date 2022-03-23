//! Third Party Middlewares
const express = require("express");
const app = express();
const morgan = require("morgan");
const middlewares = require("./middlewares");
const logger = middlewares.logger;
const authorize = middlewares.authorize;
const port = 5000;

app.use(morgan("tiny")); // all essential features

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("Classified Items");
});

app.get("/api/products", [authorize, logger], (req, res) => {
  console.log(req.user);
  res.send("Classified Products");
});

app.listen(port, () => {
  console.log(`Server listening on ${port}..`);
});
