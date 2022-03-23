// any middleware can either pass to another, or terminate by res.send or something.

//! Middlewares are stuff that come in between req and res, so can manipulate both of them.

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

// Authorization, how its done:
const authorize = (req, res, next) => {
  const { name } = req.query;
  /*
  There are a few keywords to be typed in the URL.
  Those keywords are decided by the server side, like here we have to enter URL params like:
  ...url.../api?name=john
  which will authorise to access the next level, and unauthorized can be redirected accordingly.
  */
  console.log(req.query);
  if (name === "john") {
    req.user = { name: "john", id: 69 }; // attaching a property to req, which now can be accessed by other routes in req.
    console.log(`Authorize`);
    next();
  } else {
    console.log(`Unauthorized`);
    res.status(401).send("Unauthorized");
  }
};

module.exports = { logger, authorize };
