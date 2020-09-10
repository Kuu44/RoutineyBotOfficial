module.exports = {
	name: 'beep',
	args: false,
	description: 'Beep!',
	execute(message, args) {
		message.channel.send('Boop.');
	},
};
