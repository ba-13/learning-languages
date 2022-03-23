// Modules - Encapsulated Code (share minimum)
// CommonJS - every file in node is a module by default

const sayHi = (Name) => {
  console.log(`Hello There ${Name}`);
};

module.exports = sayHi;
