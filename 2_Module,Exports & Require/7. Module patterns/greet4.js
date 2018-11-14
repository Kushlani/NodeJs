//Forth pattern
//Instead of creating a new object using function constructor, here we replace the function constructore itself to the module.exports.
//Here we use the module.exports ability to create a new object.

function greeter() {
	this.greeting = "Hello Buddy!!!";
	this.greet = function(){
		console.log(this.greeting);
	};
}

module.exports = greeter;