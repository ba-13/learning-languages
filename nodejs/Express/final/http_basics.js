const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homepage = readFileSync("../static/http_basics.html");

const server = http.createServer((req, res) => {
  //   console.log(req.method);
  console.log(req.url);
  // Header declarations - status code, mime/media type - use mdn docs
  const url = req.url;
  if (url === `/`) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
    // about page
  } else if (url === `/about`) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Not Found</h1>");
    res.end();
  }
});
server.listen(5000);
