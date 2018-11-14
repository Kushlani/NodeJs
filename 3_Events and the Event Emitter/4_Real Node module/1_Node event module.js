//go to nodejs.org/api/ then click events.Likewise you can add any event modules to your programme by using nodejs.org
var Emitter = require("events");


var emtr = new Emitter();
//here "greet" is a magic string, which means it has special meaning in our code and it's bad bcz, it makes easy for a typo and cause bugs
emtr.on("greet",function() {
	console.log("Somewhere, someone said Hello..");
});

emtr.on("greet",function() {
	console.log("A greeting occured...");
});

console.log("Hello..");
emtr.emit("greet");
