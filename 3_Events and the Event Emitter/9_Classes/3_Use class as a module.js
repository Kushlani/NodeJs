var eventEmitter = require("events");

module.exports = class Greeter extends eventEmitter {//or we can create a variable and then add it to module.exports
	constructor() {
		//in Classes we don't directy call the parent constructor(eventEmitter) and therefore, we use super()
		//Inoeder to call super you have to say what you are inheriting from.means parent constructor
		super();
		this.greeting = "Hello...";
	}

	greet(data) {
		console.log(`${this.greeting} : ${data}`);
		this.emit(data);
	}
};
