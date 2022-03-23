const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on listens ot specific event
customEmitter.on("response", (name, id) => {
  console.log("data received"); // this is the callback function
  console.log(name, String(id));
});
customEmitter.on("response", () => {
  console.log("some other logic here");
});
// emit emits that event
customEmitter.emit("response", "john", 34);
/*
    Order matters: You should be listening to an event before it emits, or you will miss it.
*/
