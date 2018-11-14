//pass by value
function byValue(a) {
	a = 2;
}

var b = 1;
byValue(b);
console.log(b);


//pass by reference
function byReference(obj) {
	obj.prop1 = function() {};
	obj.prop2 = {};
}

var c = {};
c.prop1 = {};
byReference(c);
console.log(c);
