exports.handler = function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Sender url: '.concat(req.url));
	res.end();
}
