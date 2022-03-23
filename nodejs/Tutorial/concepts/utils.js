const { readFile, writeFile } = require("fs").promises; // does exactly the same thing, to the original read write File function

// This is used to promisify a function.
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// callbacks nesting.
// we can use promisify of util instead
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, text) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(text);
//       }
//     });
//   });
// };

// This way, of async await, of promises is much cleaner
const start = async () => {
  try {
    const first = await readFile(
      "../built-in-modules/content/nothing.txt",
      "utf8"
    );
    const second = await readFile(
      "../built-in-modules/content/subfolder/test.txt",
      "utf8"
    );
    await writeFile(
      "../built-in-modules/content/result-promise-await.txt",
      `This is from await, promisify from utils : ${first}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
