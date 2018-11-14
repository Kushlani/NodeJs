/*
NodeJs added the idea of the feature of Modules to Javascript because it didn't have that facility, becuase you need the ability to 
seperate your code into a module structure when building large scale software.
Javascript specification itself now inculdes that feature to their new version ES6. 
ES6 now has modules built-in. That means JS engines like V8 are supporting new module structure not the add on features from Nodejs.
V8 js engine
So overtime we are going to see the usage of ES6(JS) modules instead of Node modules.

The new syntax in ES6 for modules is very powerful.
We can use export keyword before the function keyword if we want to export something.
And we can import anything that has export tag 
*/

export function greet() {
	console.log("Hello");
}

import * as greeter from "greet";
greeter.greet();