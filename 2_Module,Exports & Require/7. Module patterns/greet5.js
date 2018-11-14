var greeting = "Hello Buddy!!!!";

function greet() {
	console.log(greeting);
}

/*Here I am only revealing the properties or methods that someone actually to be able to use. Other variables and functions are not
accessible to others and they are hidden or private. This is called the revealing module pattern. it's a very common and clean way to
structure and protect our code within the code.*/
module.exports = {
  greet: greet//function name
};