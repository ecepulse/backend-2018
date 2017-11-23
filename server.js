var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

// Express can handle wildcard bindings for server endpoints
app.all('/*', function (req, res) {
	res.send('\
		<!DOCTYPE html>\
		<html>\
			<head>\
				<title>Pulse 2018 ToDo</title>\
				<base href="/">\
			</head>\
			<body>\
				<div ui-view>\
				<script src="bundle.js"></script>\
			</body>\
		</html>\
	');
});

app.listen(PORT, function() {
	console.log('Server running on ' + PORT);
});
