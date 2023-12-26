var fs = require('fs');

exports.fileContent = function(filename) {
	var res;
	fs.readFile(filename, 'utf8', function(err, data) {
		/*if(err)
		{
			throw err;
		}*/
		res = data;
	});
	return res;
}
