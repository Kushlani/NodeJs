//the following says, when im done doing my work in this gree function (console logging hello) and then I will invoke the callback function
function greet(callback) {//here we are adding a callback function as a parameter
	console.log("Hello");
	callback();
}

greet(function() {//here we are invoking the greet function adding a function as a callback parameter
	console.log("Callback was invoked!!!");
});

greet(function() {
	console.log("A different Callback was invoked!!!");
});

//if you wanna pass some parameters to callback function you can do it like below..
function greet(callback) {//here we are adding a callback function as a parameter
	console.log("Hello");
	var data = {
		name: "Kush Upul"
	};
	callback(data);
}

greet(function(data) {//here we are invoking the greet function adding a function as a callback parameter
	console.log("Callback was invoked!!! ");
	console.log(data);
});

greet(function(data) {
	console.log("A different Callback was invoked!!!");
	console.log(data.name);
});
