const express = require("express");
const app = express();
const port = 5000;
const { people } = require("../Express/data");

app.use(express.static("../Express/methods-public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) res.status(200).send("POST");
  else res.status(401).send("Invalid");
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//? Think of how you can change the original file with every post request.
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "No Name Provided" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "No Name Provided" });
  }
  res.status(201).json({ success: true, data: [...people, { name: name }] });
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}...`);
});
