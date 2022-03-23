const express = require("express");
const app = express();
const port = 5000;

// importing routes
const rpeople = require("./routes/people");
const rauth = require("./routes/auth");

// basic express functionality
app.use(express.static("../Express/methods-public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// using routes
app.use("/login", rauth);
app.use("/api/people", rpeople);

// listening on port
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
