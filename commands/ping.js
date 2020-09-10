module.exports = {
	name: 'ping',
	args: false,
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
