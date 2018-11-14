exports.greet = function() {
	console.log("Hellooo");
};

console.log(exports);
console.log(module.exports);

//Here both are pointing to the same spots in memory. So you can use exports ONLY IF YOU MUTATE (ADD SOME PROPERT OR METHOD) IT.