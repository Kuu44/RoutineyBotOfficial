module.exports = {
	name: 'beep',
	args: false,
	dontShow: false,
	description: 'Beep!',
	execute(message, args) {
		message.channel.send('Boop.');
	},
};
