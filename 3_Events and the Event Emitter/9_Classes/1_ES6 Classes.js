/*
Classes :
	It's basically a new way of building object
	In js, classes are like syntactic sugar. It means the way we type is diferent but the same under the hood.
	When we use class syntax we can create methods without using prototype.
*/
"use strict";
/*
	it tells the V8 engine to execute the code in strict mode. ==> code execution mode 
	It helps you to write cleaner code,  ==> cleaner code
	it prevent you from using undeclared variables. ==> prevent undeclared variable ?? what is the case ??? 

	it is a new  directive in ECMAScript version 5. ==> directive 
	It is not a statement, but a literal expression,  ==> literal expression
	it is ignored by earlier versions of JavaScript. ==> ignore

	Directive : 
	In computer programming, a directive is a language construct,
	It specifies how a compiler should process its input.
	Directives are not part of the grammar of a programming language, and may vary from compiler to compiler. 
	
 */

class Person {
	constructor(firstName,lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	greet() {
		console.log(this.firstName + " " + this.lastName);
	}
}

var Kush = new Person("Kushlani","Aluthge");
Kush.greet();

var Paul = new Person("Paul","Doluweera");
Paul.greet();

console.log(Kush._proto_);
console.log(Paul._proto_);
console.log(Kush._proto_=== Paul._proto_);
