var Emitter = require("./1_Emitter.js");

//think that i have a event called "greet" and when a greeting happened i wanna respond to it

var emtr = new Emitter();
emtr.on("greet",function() {
	console.log("Somewhere, someone said Hello..");
});

emtr.on("greet",function() {
	console.log("A greeting occured...");
});

console.log("Hello..");//Here we print hello and it's something like hey something happened and then the emitter emit something happned and invoke the functions
emtr.emit("greet");
