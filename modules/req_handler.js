var url = require('url');
var file = require('./file');
var fs = require('fs');
// import upperCase from 'upper-case';
var uc = require('upper-case');
var ev = require('events');

evHandler = function() {
	console.log('Event fired')
}

var html_file = './html_files/page.html'
var new_file = './html_files/new.html'
var eventFirer = new ev.EventEmitter();
exports.handler = function(req, res) {
	// res.writeHead(200, {'Content-Type': 'text/html'});
	// res.write('param 1: '.concat(q.param1).concat('  param 2: ').concat(q.param2));
	// var data = file.fileContent(html_file);
	// res.write(data);
	// res.end();
	eventFirer.on('read', evHandler)
	fs.readFile('./html_files/page.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		var q = url.parse(req.url, true)
		body = data.toString('utf8').concat('<p> Host: ').concat(q.host).concat('</p>\n');
		body = body.concat('<p> Host Name: ').concat(q.hostname).concat('</p>\n');
		body = body.concat('<p> Path: ').concat(q.path).concat('</p>\n');
		body = body.concat('<p> Path Name: ').concat(q.pathname).concat('</p>\n');
		body = body.concat('<p> Search Param: ').concat(q.search).concat('</p>\n');
		var p = q.query;
		body = body.concat('<p> Param 1: ').concat(p.param1).concat('</p>\n');
		body = body.concat('<p> Param 2: ').concat(p.param2).concat('</p>\n');
		body = body.concat('<p /p>\n<p>').concat(uc.upperCase('Package upper-case')).concat('</p>');
		body = body.concat('</body>\n</html>');
		res.write(body);
		eventFirer.emit('read');
		return res.end();
	});
}
