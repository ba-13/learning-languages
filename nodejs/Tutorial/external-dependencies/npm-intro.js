// npm - global

// local dependencies - use it only in particular projects
// npm i <package-name>

// global dependencies - use it in any project
// npm install -g <package-name> (sudo maybe needed)

// package.json - manifest file (stores important info regarding packages installed)
// manual approach - create package.json in root, create its properties.
// npm init (asks steps)
// npm init -y

// npm install when you are accessing a repo, with package.json

// add scripts in package.json, which can be run by npm run <command>

const _ = require("lodash");

const items = [1, [2, 3, [4, [5, 6]]]];
const newItems = _.flattenDeep(items); // Just an example of using a package.
console.log(newItems);
console.log("Hello World");
