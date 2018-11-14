//Node.js file system is a module.
//It allows to work with the file system on your computer.

var fs = require("fs");

//here readFileSync is a synchronous method. Javascript engine executes code one at a time. 
//So it takes time if there is a long code, machine will slow down when others asking the same file.
//__dirname is the path of our file and greet.txt is the file name. 
var greet = fs.readFileSync(__dirname + "/8.1_greet.txt", "utf8");
console.log(greet);


//to prevent the above issue, following readFile method comes with a callback.
//readFile is an Asynchronous method.
//Always a callback has err object as the first parameter(error-first callback)
//While JS is running through the V8 engine, I'm asking from the Node, go and read the content of the text file.
//After finishing the read then thanks to the event loop the callback will execute.
//So unlike the first method here we can execute other codes while one code is finished its execution.

var greet2 = fs.readFile(__dirname + "/8.1_greet.txt", "utf8", 
	function(err, data) {
		console.log(data);//here we normally get a Buffer without putting utf8 or toString method.
});

console.log("Done..");
