// creating a bigger file.
// const { writeFileSync } = require("fs");
// for (let i = 0; i < 100000; i++) {
//   writeFileSync(
//     "../built-in-modules/content/subfolder/bigger_file.txt",
//     `${i} ${i * i} ${i ^ 2}\n`,
//     { flag: "a" }
//   );
// }

var http = require("http");
var fs = require("fs");

/*
http
  .createServer(function (req, res) {
    const text = fs.readFileSync(
      "../built-in-modules/content/subfolder/bigger_file.txt",
      "utf8"
    );
    res.end(text);
  })
  .listen(5000);
*/
// the above code works, true, but check the network tab in console dev tools, you just requested 2.13mb data. Freaking a lot.

http
  .createServer(function (req, res) {
    // streaming just, handling data in chunks
    const fileStream = fs.createReadStream(
      "../built-in-modules/content/subfolder/bigger_file.txt",
      "utf8"
    );
    fileStream.on("open", () => {
      // streaming/piping data in chunks, writing to res.
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      console.log(err);
      res.end(err);
    });
  })
  .listen(5000);
