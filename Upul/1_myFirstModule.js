console.log("module");
console.log(module);
console.log("module.exports");
console.log(module.exports);

/**
 * Module object automatically inherited to all the JS files when you execute them in Nodejs
 * Module is an object
 * export is an object inside module object (we know module is an object even before seeing the module object because of dot notation)
 * exports is an empty object
 */

var testObject = {
	name: "Kushlani",
	age: 31
};

console.log(testObject);
testObject.address = "Sydney";
console.log(testObject);


///With module export
///

module.exports.testValueToBeExported = "This is a test value which get exported......";

console.log(module);


exports.somethingElse = "SomeOtherProperty";

console.log(module);