const express = require("express");
const app = express();
const port = 5000;
const { people } = require("../Express/data");

app.use(express.static("../Express/methods-public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
  const { id } = req.params; // equivalent to req.params.id
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
