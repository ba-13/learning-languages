// streams handle data sequentially
/*
    writeable
    readable
    duplex
    transform
*/

// example we used to assign data of file to a variable to store it, but the other option is to use streams, which ofc is much more convinient.

// this is just to create a big file.
/*
const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync(
    "../built-in-modules/content/subfolder/big_file.txt",
    `helloWorld ${i}\n`,
    { flag: "a" }
  );
}
*/
// now using streams

const { createReadStream } = require("fs");

// default size of buffer is 64kb
// controlled by highWaterMark
const stream = new createReadStream(
  "../built-in-modules/content/subfolder/big_file.txt"
);
// const stream = createReadStream('../built-in-modules/content/subfolder/big_file.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../built-in-modules/content/subfolder/big_file.txt', { encoding: 'utf8' })
stream.on("data", (result) => {
  console.log(result);
});

// err is the arguement variable name broadcasted, and listened on the stream error
stream.on("error", (err) => {
  console.log(err);
});
