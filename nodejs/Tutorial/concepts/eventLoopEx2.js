console.log("first");

// setTimeout is async. Even if time specified is 0
// setTimeout finishes the process in that time specified
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
