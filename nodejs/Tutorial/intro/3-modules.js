const names = require("./4-names");
// console.log(names);

const sayHi = require(`./5-utils`);

const data = require("./6-alternativeFlavour");

console.log(data);

sayHi(`Susan`);
sayHi(names.john);
sayHi(names.peter);
