const express = require("express");
const router = express.Router();

let { people } = require("../../Express/data");

const {
  getPeople,
  createPerson,
  createPersonPostman,
  getPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// note how there is no url, cause that has been provided by app.js, through app.use

/*
This is one way.
router.get("/", getPeople);
router.post("/", createPerson);
router.get("/postman/:id", createPersonPostman);
router.get("/postman", getPostman);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);
*/

// This is another way.
router.route("/").get(getPeople).post(createPerson);
// router.route("/").post(createPerson);
router.route("/postman/:id").get(createPersonPostman);
router.route("/postman").get(getPostman);
router.route("/:id").delete(deletePerson).put(updatePerson);

module.exports = router;
