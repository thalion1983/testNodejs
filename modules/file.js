var fs = require('fs');

exports.fileContent = function(filename) {
	var data = fs.readFileSync(filename, 'utf8');
	return data;
}
