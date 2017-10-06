var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

// Express can hadle wilcard bindings for server endpoints
app.all('/*', function (req, res) {
	res.send('\
		<!DOCTYPE html>\
		<html>\
			<head>\
				<title>Pulse 2018 ToDo</title>\
			</head>\
			<body>\
				<h1>Hello, this is the app</h1>\
			</body>\
		</html>\
	');
});

app.listen(PORT, function() {
	console.log('Server running on ' + PORT);
});
