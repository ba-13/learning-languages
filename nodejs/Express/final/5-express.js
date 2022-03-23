// Route Params

const express = require("express");
const app = express();
const port = 5000;

const { products } = require("../data");

app.get("/", (req, res) => {
  res
    .status(200)
    .write(`<h1>Home Page</h1><a href="/api/products">Products</a>`);
});

app.get("/api/products", (req, res) => {
  res.status(200);
  const lessProductDetails = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(lessProductDetails);
});

// route params as placeholders, e.g. productID below
app.get("/api/products/:productID", (req, res) => {
  console.log(req.url);
  // console.log(req.params);
  const { productID } = req.params;
  // ofc the param is a string, which you have to type case to Number.
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send(`Review ID ${req.params.reviewID}`);
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
