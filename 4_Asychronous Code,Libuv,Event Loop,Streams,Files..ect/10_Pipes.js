/*
Pipe :- passing information from one programme process to another
		Or connecting two streams by writing to stream what is being read from another
		Or sending chunks to stream to stream
 */

//We can do the same thing we did in the stream using pipe method.
var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/10.1_greet2.txt');
var writable = fs.createWriteStream(__dirname + '/10.2_gree2tcopy.txt');

readable.pipe(writable);
