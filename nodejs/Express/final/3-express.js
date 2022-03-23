const express = require("express");
const app = express();
const port = 5000;
const { products } = require("../data");

// serving a json object, is in itself, an API.
app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
