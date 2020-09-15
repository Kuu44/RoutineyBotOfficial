module.exports = {
	name: 'ping',
	args: false,
	dontShow: false,
  description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
