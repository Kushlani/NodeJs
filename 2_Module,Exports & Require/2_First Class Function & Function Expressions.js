/*
First class functions
	We can pass them around like variables, we can use them like any other data type. or in other words a function can be passed as 
	an argument to other functions, can be
	returned by another function and can be assigned as a value to a variable.
 */

//function statement
function greet() {
    console.log("Hello");
}
greet();


//functions are first-class
function logGreeting(fn) {
    fn(); //here we use function call because we have given the greet function as a parameter when we call logGreeting  
}
logGreeting(greet); //here like strings or numbers we can pass a function as an argument


//function expression
//A block of code that results in a value
var greetMe = function() {
    console.log("Hi Kush");
};
greetMe();

//the above function is also a first class
logGreeting(greetMe);

//use a function expression on the fly
logGreeting(function() {
    console.log("Hi Booo");
});