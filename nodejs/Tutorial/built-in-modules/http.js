const http = require("http");

// req -> requests from clients, res -> response of this server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Home Page");
  } else if (req.url === "/about") {
    res.end("Here is our short summary");
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>Can't find the page you are looking for</p>
      <a href="/">Back Home</a>
      `);
  }
});
server.listen(5000);
