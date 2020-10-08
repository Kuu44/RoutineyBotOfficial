module.exports = {
	name: 'beep',
	args: false,
	dontShow: false,
	description: 'Beep!',
	execute(message, args, bot) {
		message.channel.send('Boop.');
	},
};
