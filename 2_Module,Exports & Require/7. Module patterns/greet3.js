//Third pattern
//Create a function constructor and make new object and assign them to module.exports

function greeter() {
	this.greeting = "Hello Buddy!!";
	this.greet = function(){
		console.log(this.greeting);
	};
}

module.exports = new greeter();