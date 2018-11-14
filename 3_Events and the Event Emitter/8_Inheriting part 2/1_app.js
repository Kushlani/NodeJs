//think person object is as an eventemitter constructor function and bride object as another function constructor.
//and you want to create new object from bride constructor function and add person object greet method to it.
//but in here you have to add person object properties to bride object using .call(this).
//Then the "this" keyword points to the person object

var util = require("util");

function person() {
	this.firstName = "Kushlani";
	this.lastName = "Aluthge";
}

person.prototype.greet = function() {
	console.log("Hello " + this.firstName + " " + this.lastName);
};

function bride() {
	person.call(this);
	this.dress = "saree";
}

util.inherits(bride,person);
var KushBride = new bride();
KushBride.greet();