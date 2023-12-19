exports.welcome_msg = function(port) {
	var msg = 'Welcome to my server being served on port '.concat(port).concat(' on ').concat(Date());
	return msg;
}
