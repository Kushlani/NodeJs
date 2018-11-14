/*
Consider modules to be the same as JavaScript libraries./ or a reusable block of code

A set of functions you want to include in your application.

Built-in Modules
Node.js has a set of built-in modules which you can use without any further installation.

*/

var greet = function() {
	console.log("Hi buddy");
};

module.exports = greet;//we set the greet function equal to module.exports to make it available outside of our module.


