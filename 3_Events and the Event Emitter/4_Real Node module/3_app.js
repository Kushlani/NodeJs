//we use eventConfig.GREET instead of "greet" to avoid typos and bugs

var Emitter = require("events");
var eventConfig = require("./2_Config.js").events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET,function() {
	console.log("Somewhere, someone said Hello..");
});

emtr.on(eventConfig.GREET,function() {
	console.log("A greeting occured...");
});

console.log("Hello..");
emtr.emit(eventConfig.GREET);
