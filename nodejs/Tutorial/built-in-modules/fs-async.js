// this is async methods, so will lead to callbacks
const { readFile, writeFile } = require("fs");

console.log("start");

// attributes - path, encoding, function handling err and result.
readFile("./content/subfolder/test.txt", "utf-8", (err, result) => {
  // accessing test.txt (second)
  if (err) {
    console.log(error);
    return;
  }
  const first = result;
  readFile("./content/nothing.txt", "utf8", (err, result) => {
    // accessing nothing.txt (first)
    if (err) {
      console.log(error);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        // now using above both variables to write to a new file, this will ofc return nothing.
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with the task");
      }
    );
  });
  console.log(result);
});

console.log("Moving to the next task");
