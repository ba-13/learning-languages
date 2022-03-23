const num1 = 5;
const num2 = 10;

function addValue() {
  console.log(`The sum is: ${num1 + num2}`);
}
addValue();
module.exports = addValue;
// *When code is exported, it is actually wrapped in the child file, so is executed as well.
