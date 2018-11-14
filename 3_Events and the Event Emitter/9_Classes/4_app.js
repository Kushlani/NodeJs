var Greeter = require("./3_Use class as a module.js");

var greeter1 = new Greeter();
greeter1.on("greet",function(data) {
	console.log("Someone greeted " + data);
});

greeter1.greet("Kushlani");