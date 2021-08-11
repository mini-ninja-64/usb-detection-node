const {
  addEventCallback,
  removeEventCallback,
  changeEventCallback,
} = require("./callbacks");

const eventsToMonitor = [
  {
    name: "add",
    logOptions: { enabled: true, colour: "green" },
    callback: addEventCallback,
  },
  {
    name: "remove",
    logOptions: { enabled: true, colour: "yellow" },
    callback: removeEventCallback,
  },
  {
    name: "change",
    logOptions: { enabled: true, colour: "red" },
    callback: changeEventCallback,
  },
];

module.exports = eventsToMonitor;
