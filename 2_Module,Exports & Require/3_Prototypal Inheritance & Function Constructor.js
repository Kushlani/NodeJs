/*
Prototypal inheritance :-
	Every object has a property that actually is pointed out to a another object and it's the object's prototype. It's the thing that the object inherits from.
	It has the access to other objects and their properties and methods as well. If i create another object and it could also point to the same properties and 
	methods of the other object.


Function Constructors:-
	A normal functin that is used to construct objects.
	It's another way of creating objects and manage what's the prototypes are
*/

function person(firstName,lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

person.prototype.greet = function() {
	console.log("Hello " + this.firstName + " " + this.lastName);
};

var John = new person("John","Doe");
console.log(John.firstName);

John.greet();

/*
when you use a function constructor, any object created from a function constructor it's prototype will point to the prototype 
property of the function that you used to construct the object.
 */