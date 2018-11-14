var greet = require("./greet.js");
greet();//becuase require always returns module.exports and here exports pointing to the different spot. So the require returns
		//empty require object not the function.


var greet2 = require("./greet2.js");
greet2.greet();