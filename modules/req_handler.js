var url = require('url');

exports.handler = function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query
	res.write('param 1: '.concat(q.param1).concat('  param 2: ').concat(q.param2));
	res.end();
}
