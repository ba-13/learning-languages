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

getText("../built-in-modules/content/subfolder/test.txt")
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.log(err);
  });

// readFile(
//   "../built-in-modules/content/subfolder/test.txt",
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     else {
//       console.log(data);
//     }
//   }
// );
