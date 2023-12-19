var http_handler = require('http');
var wc = require('./modules/welcome')

var port = 9876;
http_handler.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(wc.welcome_msg(port));
  }).listen(port);
