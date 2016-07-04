(function() {
	var socket = io();
	var btn = document.getElementById('send');
	var field = document.getElementById('message');
	var message_list = document.getElementById('messages');
	var color = getRandomGrey();

	btn.addEventListener('click', function() {
		transmit({
			'text': field.value,
			'color': color
		});
	});

	field.addEventListener('keydown', function(e) {
		if (e.keyCode === 13) {
			transmit({
				'text': field.value,
				'color': color 
			});
		}
	});

	function transmit(msg) {
		socket.emit('chat message', msg);
		field.value = '';
		return false;
	}

	function getRandomGrey() {
		var num = Math.floor(Math.random() * 70 + 185);

		return 'rgb(' + num + ', ' + num + ', ' + num + ')';
	}

	socket.on('chat message', function(msg) {
		var new_msg = document.createElement('li');
		new_msg.innerText = msg.text;
		new_msg.style.backgroundColor = msg.color;

		message_list.appendChild(new_msg);
	});
})();