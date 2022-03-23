const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

// setup static and middleware
// static asset - server needn't change it
// express takes care of status code, mime type and paths.
// indeed, Js files are static assets in the server side.
app.use(express.static("../public"));
//! This is a middleware provided by express.
// It makes all content of public folder as a static asset, publicly available.

// app.get("/", (req, res) => {
// path.resolve in case of providing abs paths.
//   res.sendFile(path.resolve(__dirname, "../navbar-app/index.html"));
// We get the same, no resource found 404s. Now using app.use
//! We can serve this html directly as a static asset as well (index.html is always a root)
// !this can also be served by Server-Side-Rendering
// });

app.all("*", (req, res) => {
  res.status(404).send("Resource not Found");
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
