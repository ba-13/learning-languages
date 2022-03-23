const express = require("express");
const app = express();
const port = 5000;
let { people } = require("../data");

// static assets
app.use(express.static("../methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json data
app.use(express.json());

//* GET Method, default.
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//* POST Method - javascript.html
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "No Name Provided" });
  }
  res.status(201).json({ success: true, person: name });
});

//* POST Method - Traditional Form
// app.post("/login", (req, res) => {
// Chose /login cause it is provided in the form of methods-public
//   console.log(req.body);
//   res.send("POST");
// });
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) res.status(200).send("POST");
  else res.status(401).send("Invalid");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
