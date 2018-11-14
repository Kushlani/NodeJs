//pattern one
var greet1 = require("./greet1.js");
greet1();


//pattern two
var greet2 = require("./greet2.js");
greet2.greet();
 
//or you can add the method name after the require function like below
var greet2 = require("./greet2.js").greet;
greet2();


//pattern three
var greet3 = require("./greet3.js");
greet3.greet();
greet3.greeting = "Changed Hello Buddy!!";//here we changed the greeting property value

console.log("---------");
var greet3b = require("./greet3.js");//here we created a new variable using the same require path
greet3b.greet();//the answer is same as greet3 variable, as this used the same module.exports objects and if anything changed in the 
                //previous object it affects to the other. Means pass by reference theory

//pattern four
var greet4 = require("./greet4.js");
var greeterNew = new greet4();
greeterNew.greet();

//pattern five
var greet5 = require("./greet5.js").greet;
greet5();