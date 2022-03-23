/*
! Things get messy if you handle all routes from a single file. Distributing this over files is better option with express.Router 

*/
const express = require("express");
const app = express();
const port = 5000;
const { people } = require("../Express/data");

app.use(express.static("../Express/methods-public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* One group /login
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) res.status(200).send("POST");
  else res.status(401).send("Invalid");
});

//* Second group /api/people
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "No Name Provided" });
  }
  res.status(201).json({ success: true, person: name });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}...`);
});

/*
 * Instead of grouping with comments, we can do so by making different files for different parent routes.
 */
