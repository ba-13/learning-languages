const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World!");
});

port = 5000;

// Listen is async
server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
