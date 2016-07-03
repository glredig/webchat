(function() {
	var socket = io();
	var btn = document.getElementById('send');
	var field = document.getElementById('message');
	var message_list = document.getElementById('messages');


	btn.addEventListener('click', function() {
		transmit(field.value);
	});

	field.addEventListener('keydown', function(e) {
		console.log(e.keyCode);
		if (e.keyCode === 13) {
			transmit(field.value);
		}
	});

	function transmit(msg) {
		socket.emit('chat message', msg);
		field.value = '';
		return false;
	}

	socket.on('chat message', function(msg) {
		var new_msg = document.createElement('li');
		new_msg.innerText = msg;

		message_list.appendChild(new_msg);
	});
})();