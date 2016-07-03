(function() {
	var socket = io();
	var btn = document.getElementById('send');
	var field = document.getElementById('message');
	var message_list = document.getElementById('messages');


	btn.addEventListener('click', function() {
		socket.emit('chat message', field.value);
		field.value = '';
		return false;
	});

	socket.on('chat message', function(msg) {
		var new_msg = document.createElement('li');
		new_msg.innerText = msg;

		message_list.appendChild(new_msg);
	});
})();