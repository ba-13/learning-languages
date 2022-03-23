//! Middleware
const express = require("express");
const app = express();
const port = 5000;
const middleWares = require("./middlewares.js");
const logger = middleWares.logger;
const authorize = middleWares.authorize;

// NOTE This now works for all routes.
//* In express, everything goes in order. So .use should be places before the routes where it should act as a middleware
// app.use(logger);
// app.use("/", [logger, authorize]); // applicable to all paths with base route /api

// NOTE req => middleware => res
// NOTE express provides the middleware with req, res, next.

/*
SECTION API route:
  Options: own / express / third pary
*/

app.get("/", logger, (req, res) => {
  res.status(200).send("This place is open.");
});
app.get("/api", [logger, authorize], (req, res) => {
  res.status(200).send("Oh, you have the auth. Nice.");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", [logger, authorize], (req, res) => {
  res.send("Super Secret Products");
});

app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.query.name);
  console.log(req.user);
  res.send("Items-that-must-not-be-named.");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}...`);
});
