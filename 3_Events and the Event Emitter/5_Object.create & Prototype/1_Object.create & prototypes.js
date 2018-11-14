//There are many ways to set up prototype chain. Object.create is a very simple and fast way to set up inheritance. 
//That means objects being able to use other objects properties and methods.

var person = {
	firstName: "",
	lastName: "",
	greet: function() {
		return this.firstName + " " + this.lastName;
	}
};

var Kush = Object.create(person);
Kush.firstName = "Kushlani";
Kush.lastName = "Aluthge";

var Upul = Object.create(person);
Upul.firstName = "Upul";
Upul.lastName = "Doluweera";

console.log(Kush.greet());
console.log(Upul.greet());