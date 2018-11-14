/*
util.js is a module in nodejs is something to help us with inheritance. It's a method call inherits.
it takes two contructors
	1. a function constructor upon which you want to add new methods and properties to be available to objects created with it
	2. where the methods and properties you want to be added
*/

var eventEmitter = require("events");
var util = require("util");

function Greeter() {
	this.greeting = "Hello World!";
}

util.inherits(Greeter,eventEmitter);

Greeter.prototype.greet = function() {
	console.log(this.greeting);
	this.emit("greet");
};

var greeter1 = new Greeter();
greeter1.on("greet", function() {
	console.log("Someone greeted...");
});

greeter1.greet();