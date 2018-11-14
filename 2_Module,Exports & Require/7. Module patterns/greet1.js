/*First pattern
	Overwriting exports with a function. That means replacing empty exports object with a function.
	Here we are assining a function to the module.exports object directly. 
*/
module.exports = function() {
	console.log("Hello Buddy");
};

