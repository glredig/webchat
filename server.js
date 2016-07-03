var express	= require('express'),
	app 	= express(),
	server 	= require('http').Server(app)
	io		= require('socket.io')(server);

const PORT = process.env.port || 8080;

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.use('/static', express.static(__dirname + '/public'));

io.on('connection', function(socket) {
	console.log('User connected');
	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
	});

	socket.on('disconnect', function() {
		console.log('User disconnected')
	});
});

server.listen(PORT, function() {
	console.log("Listening on port " + PORT);
});



