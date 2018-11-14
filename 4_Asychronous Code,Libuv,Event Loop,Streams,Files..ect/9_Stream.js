/*
The Stream module provides a way of handling streaming data.
Stream is just a sequence(particular order) of peices of data
That data broken up to Chunks(peice of data being sent through a stream) 

There are two types of streams: 
	1. readable 
		If the stream is redable the Node could read information from the stream
	2. writable.
		If the stream is writable then Node could send information through the stream

*/
var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/9.1_greet1.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });//You can use strings instead of buffers by adding a object like this.
//highWaterMark : number of bytes that we want our buffer size to be or how big we want each chunk to be
var writable = fs.createWriteStream(__dirname + '/9.2_greetcopy.txt');

readable.on('data', function(chunk) {
	console.log(chunk.length);
	writable.write(chunk);
});