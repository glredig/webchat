var app 	= require('express')(),
	server 	= require('http').Server(app);

const PORT = process.env.port || 8080;

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

server.listen(PORT, function() {
	console.log("Listening on port " + PORT);
})



