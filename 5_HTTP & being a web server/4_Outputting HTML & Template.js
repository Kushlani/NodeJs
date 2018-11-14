//Here we require a html file through fs mosule and set the content type as html.

var http = require("http");
var fs = require("fs");

http.createServer(function(req,res) {
	res.writeHead(200, {"Content type" : "text/html"});
	var html = fs.readFileSync(__dirname+ "/index.html");
	res.end(html);
}).listen(1337, "127.0.0.1");