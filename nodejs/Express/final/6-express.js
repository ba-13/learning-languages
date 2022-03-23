// URL Params, Query String
/*
! General Format:
* ---url---/query?name=john&id=4&age=19...
*/
const express = require("express");
const app = express();
const port = 5000;

const { products } = require("../data");

// app.get("/", (req, res) => {
//   res.json(products);
//   res.status(200);
// });

app.get("/query", (req, res) => {
  // console.log(req.query);
  res.status(200);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // We need to return because there can be a single response per request.
    return res.status(200).json({ success: true, data: [] });
  }
  res.json(sortedProducts);
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
