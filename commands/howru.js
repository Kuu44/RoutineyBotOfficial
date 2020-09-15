module.exports = {
	name: 'howru',
	args: false,
	dontShow: false,
  description: 'Tells us how the bot is feeling today (new one everyday)',
	execute(message, args) {
		const info = require('../info.js');
		const {
			inMinutes,
			convertTime,
			getTime,
			getCurrTime,
			getDay
		} = require('../functions/timeConvert.js');

	  switch (getDay(info[message.guild.id].timeZoneFix)) {
	    case 0:
	      message.channel.send(`Feeling real depressed, what did you expect, <@!${message.author.id}>? Its a Monday :unamused:`);
	      break;
	    case 1:
	      message.channel.send(`Ooo I'm feeling sooo tired today, <@!${message.author.id}>! Had a Saturday night out with Goley yesterday :heart_eyes_cat:`);
	      break;
			case 2:
	      message.channel.send(`Feeling strong today, <@!${message.author.id}>. Just finished a Two-Minute Tuesday session of window-building with Bishad :muscle:`);
	      break;
			case 3:
	      message.channel.send(`Grr... I'm feeling angry today, <@!${message.author.id}>. Was irritated for the past hour by Kushal, posting stupid things in his stories :rolling_eyes: `);
	      break;
			case 4:
	      message.channel.send(`I'm feeling real sporty today, <@!${message.author.id}>. Just finished my post-depression workout :woozy_face:`);
	      break;
			case 6:
	      message.channel.send(`It's a friggin Saturday, <@!${message.author.id}>. What the hell are you doing messaging me? Go hangout with your (_possibly imaginary_) friends :partying_face:`);
	      break;
	    default:
	      message.channel.send(`I'm feeling particularly routine-ly this ${info.days[getDay(info[message.guild.id].timeZoneFix)]}, <@!${message.author.id}> :stuck_out_tongue_winking_eye:!\nNow go f yourself.`);
	  }
	},
};
