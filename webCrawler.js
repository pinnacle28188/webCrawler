var http = require('http');
 
var port = 8080;

var s = http.createServer();
s.on('request', function(request, response) {
    response.writeHead(200);
    console.log("request.url = " + request.url);
		
	var data = '';
    request.on('data', function(chunk) {
        data += chunk.toString();
    });
	
    request.on('end', function() {
        console.log(data);
        response.end();
    });
	
	var url = "http://www.google.com";
	
	http.get(url, function(res) {
        console.log("Got response: " + res.statusCode);
		
		var content = '';
    
		res.on('data', function(chunk) {
			console.log('chunk.length ' + chunk.length);
			//console.log('chunk data = ' + chunk);
			content += chunk;
		});
    
		res.on('end', function() {
			console.log(content);
			console.log('end');
			console.log(content.length);
		});
    });
 
});

s.listen(port);

console.log("Listening on http://127.0.0.1:" + port + "/");