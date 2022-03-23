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

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: "Please provide a valid ID." });
  }
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a valid name." });
  }
  console.log(typeof Number(id));

  // doing this is valid
  const data = people;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == Number(id)) {
      data[i].name = name;
    }
  }

  // creating a map is valid and cleaner
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  console.log(id, name);
  res.status(201).json({ success: true, data: [...data], changed: newPeople });
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}...`);
});
