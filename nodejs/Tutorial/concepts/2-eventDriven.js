const http = require("http");

// Using Event Emitter API
const server = http.createServer();

// listen to event "request" and respond accordingly
server.on("request", (req, res) => {
  res.end("Welcome");
  console.log("Listening");
});
server.listen(5000);
