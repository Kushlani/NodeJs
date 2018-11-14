"use strict";

var eventEmitter = require("events");

class Greeter extends eventEmitter {
	constructor() {
		//in Classes we don't directy .call the parent constructor(eventEmitter) and therefore, we use super()
		//Inorder to call super you have to say what you are inheriting from. It means the parent constructor
		super();
		this.greeting = "Hello...";
	}

	greet(data) {
		console.log(`${this.greeting} : ${data}`);
		this.emit(data);
	}
}

var greeter1 = new Greeter();
greeter1.on("greet",function(data) {
	console.log("Someone greeted " + data);
});

greeter1.greet("Kushlani");


