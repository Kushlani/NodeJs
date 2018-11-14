/*
Mapping(matching) http requests to content. If we request something from the server but the data doesnt exist in that, then the 
server tries to find other places(such as database) whrer the data exists and map the request to content and gives it back
to the client. That is what we called routing.

 */

//here we use diferent urls for routing, according to the url we type on the localhost the data will be different as follows

var http = require("http");
var fs = require("fs");

http.createServer(function(req,res) {
	
	if(req.url === "/") {
		fs.createReadStream(__dirname + "/index.html").pipe(res);
	}

	else if(req.url === "/api") {
		res.writeHead(200, {"Content type" : "application/json"});
		var obj = {
		firstName : "Kushlani",
		lastName : "Aluthge"
		};
		res.end(JSON.stringify(obj));
	}

	else {
		res.writeHead(404);
		res.end();
	}

}).listen(1337,"127.0.0.1");