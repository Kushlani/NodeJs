//Using streams is fundamental to improve performances when trnasfering data.
//Here we say connect a readable file stream and pipe it to the response stream. 
//So every chunk of data read from the file will be buffered and then piped out to the http response stream
//So rather than pulling the entire file into a buffer and sending it, here we send a chunk at a time. 
//Then our buffer stays small and that means our application will faster, more responsive and more performant
//In breif, we use Stream to send the data little by little as chunks continously.

var http = require("http");
var fs = require("fs");

http.createServer(function(req,res) {
	res.wriiteHead(200, {"Content-Type" : "text/html"});
	fs.createReadStream(__dirname + "/index.html").pipe(res);

}).listen(1337,"127.0.0.1");