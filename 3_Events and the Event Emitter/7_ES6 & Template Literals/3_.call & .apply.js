//.call method is a powerful method that it can change the position of this. keyword points to an object.
//.apply is doing the same but the difference is when we add params to functions, we use them as an array in .apply method.
//but in .call we just add it after the method with a comma.

var obj = {
	name: "Kushlani Aluthge",
	greet: function() {
		console.log(`Hello ${this.name}`);
	}
};

obj.greet();
obj.greet.call({name : "Sumudumali Doluweera"});
obj.greet.apply({name: "Sumudumali Doluweera"});


//When you add params to function
var obj = {
	name: "Kushlani Aluthge",
	greet: function(param) {
		console.log(`Hello ${this.name}`,param);
	}
};

obj.greet();
obj.greet.call({name : "Sumudumali Doluweera"}, "Great");
obj.greet.apply({name: "Sumudumali Doluweera"}, ["hi","bye"]);
