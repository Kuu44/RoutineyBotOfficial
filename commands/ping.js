module.exports = {
	name: 'ping',
	args: false,
	dontShow: false,
  description: 'Ping!',
	execute(message, args, bot) {
		message.channel.send('Pong.');
	},
};
