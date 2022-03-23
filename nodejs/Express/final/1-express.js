// installing a particular version with npm,
// npm i <package-name>@<version> --save{optional attribute}
const app = require("express")();

// app.get
// app.post
// app.put
// app.delete
// app.use - middleware
// app.all - default behavior
// app.listen

// this callback function is called if the user tries to make a get request to /
app.get("/", (req, res) => {
  console.log("User hit the homepage");
  res.status(200).send("Home Page"); // We can chain functions.
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
