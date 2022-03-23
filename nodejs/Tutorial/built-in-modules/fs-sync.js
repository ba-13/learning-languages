// Destructuring
const { readFileSync, writeFileSync } = require("fs");
// All in variable
// const fs = require("fs");

console.log("start");

const test = readFileSync("./content/subfolder/test.txt", "utf8");
const nothing = readFileSync("./content/nothing.txt", "utf8");

// console.log(nothing);
// console.log(test);

//? attributes - path, content, flag (type of access)
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${nothing}, ${test}.`,
  { flag: "a" }
);
console.log("done with the task");
console.log("moving to the next task");
