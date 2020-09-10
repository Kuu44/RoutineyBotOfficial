module.exports = {
	name: 'howru',
	args: false,
	description: 'Tells us how the bot is feeling today',
	execute(message, args, today) {
		const info = require('../info.js');
		var today = new Date();

	  switch (today.getDay()) {
	    case 1:
	      message.channel.send(`Feeling real depressed, what did you expect, <@!${message.author.id}>? Its a Monday :unamused:`)
	      break;
	    default:
	      message.channel.send(`I'm feeling particularly routine-ly this ${info.days[today.getDay()]}, <@!${message.author.id}> :stuck_out_tongue_winking_eye:!\nNow go f yourself.`);
	  }
	},
};
