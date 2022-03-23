const { readFile } = require("fs");
console.log("Start First Task");

// async mode doesn't invoke errors, if it doesn't execute properly. You have to do so manually.
readFile(
  "../built-in-modules/content/subfolder/test.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    console.log("Completed First Task");
  }
);
console.log("Waiting for next task.");
