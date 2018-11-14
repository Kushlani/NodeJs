exports = function(){
	console.log("Hello");
};

/*
if we assign a function to exports it says it's a function now. not a empty object as it used to be.
module.exports and exports are originally pointed to the same spots(memory location) of the object. When the exports stes equal 
to a value, then it's a new spot in memory.
*/

console.log(exports);
console.log(module.exports);