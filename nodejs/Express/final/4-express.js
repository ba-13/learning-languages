const express = require("express");
const app = express();
const port = 5000;
const { products } = require("../data");

app.get("/", (req, res) => {
  //   console.log(req);
  res
    .status(200)
    .send(`<h1>Home Page</h1><a href="/api/products">products</a>`);
});

app.get("/api/products", (req, res) => {
  res.status(200);
  // map function works only with arrays, so you need to de-json the imported object.
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// we can do as below, but the better method is route parameters
app.get("/api/products/1", (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);
  res.json(singleProduct);
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
