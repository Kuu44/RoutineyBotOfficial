module.exports = {
	name: 'hi',
	args: false,
	dontShow: false,
  description: 'Greets the user',
	execute(message, args, bot) {
		message.channel.send(`Hi <@!${message.author.id}>! I'm Routiney, at your service :v:`);
	},
};
