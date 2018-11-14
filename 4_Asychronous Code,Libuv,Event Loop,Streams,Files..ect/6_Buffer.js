var buf = new Buffer("Hello", "utf8");//buffer name, character encoding
console.log(buf);

console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);//here we can give index of the Hello string as an array 
console.log(buf.toJSON());

//we can rewrite the string
buf.write("Wo");
console.log(buf.toString());