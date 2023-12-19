var http_handler = require('http');
var port = 9876;
http_handler.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Serving on port '.concat(port));
  }).listen(port);
