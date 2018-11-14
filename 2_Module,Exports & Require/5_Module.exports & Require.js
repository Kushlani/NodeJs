(function(exports, require, module, _filename, _dirname) {

    var greet = function() {
        console.log("Hellooo");
    };
    module.exports = greet;
});

fn(module.exports, require, module, filename, dirname);

return module.exports;

/*
require is a function, that you pass a "path" too.
module.exports is what the require function returns
this works because your code is actually wrapped in a function(function expression) that is given these things as function parameters.

*/