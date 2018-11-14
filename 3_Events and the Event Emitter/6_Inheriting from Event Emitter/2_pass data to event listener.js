//If you want to pass the data to event listeners when the event is emitted, you can do it like below
var eventEmitter = require("events");
var util = require("util");

function Greeter() {
	this.greeting = "Hello!";
}

util.inherits(Greeter,eventEmitter);

Greeter.prototype.greet = function(data) {
	console.log(this.greeting + " : " + data);
	this.emit("greet", data);//if you wanna pass the data to every listener in your array, you can write it after the event method
};

var greeter1 = new Greeter();
greeter1.on("greet", function(data) {//in my listener i have to expect the parameter "data"
	console.log("Someone greeted :" + data);
});

greeter1.greet("Kushlani");