var http_handler = require('http');
var wc = require('./modules/welcome')
var rh = require('./modules/req_handler');

var port = 9876;
http_handler.createServer(rh.handler).listen(port);
