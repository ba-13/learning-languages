const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, text) => {
      if (err) {
        reject(err);
      } else {
        resolve(text);
      }
    });
  });
};

// usually written with try catch for some control
// waiting for promises is much cleaner than writing nested callbacks
const start = async () => {
  try {
    const first = await getText(
      "../built-in-modules/content/subfolder/test.txt"
    );
    const second = await getText(
      "../built-in-modules/content/subfolder/test.txt"
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
