const http = require("http");
const { readFileSync } = require("fs");
const port = 5000;

const homePage = readFileSync("./index.html");
const homeStyles = readFileSync("./styles.css");
const homeLogo = readFileSync("./logo.svg");
const homeScript = readFileSync("./browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  if (url === `/`) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === `/styles.css`) {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === `/logo.svg`) {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  } else if (url === `/browser-app.js`) {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeScript);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Not Found</h1>");
  }
});

server.listen(port);
// You need to serve each resource individually, that's where express becomes convienient.
