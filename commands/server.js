module.exports = {
	name: 'server',
	args: false,
	dontShow: false,
  description: 'Gives info on server',
	execute(message, args) {
		message.channel.send(`This server\'s name is: ${message.guild.name}\nMember Count: ${message.guild.memberCount}`);
	},
};
