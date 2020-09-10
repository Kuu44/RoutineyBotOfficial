/*    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `rt! `
    if (message.substring(0, 4) == 'rt! ') {
        var args = message.substring(4).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // rt!ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
	          default:
  	          bot.sendMessage({
                      to: channelID,
                      message: 'Hmm.. I dont seem to have this command!'
                  });
              // Just add any case commands if you want to..
         }
     }
});*/

/*switch (cmd) {
  case 'ping':
    bot.commands.get('ping').execute(message, args);
    break;
  case 'beep':
    message.channel.send('Boop.');
    break;
  case 'today':
    showRoutine(today.getDay(), message);
    break;
  case 'time':
    message.channel.send(date + '\n' + time);
    break;
  case 'hi':
    message.channel.send(`Hi ${message.author.username}!`);
    break;
  case 'howru':
    howYou(message);
    break;
  case 'server':
    message.channel.send(`This server\'s name is: ${message.guild.name}\nMember Count: ${message.guild.memberCount}`);
    break;
  case 'args':
    message.channel.send(`Argument list: ${args}\nCount: ${args.length}`);
    break;
  default:
    message.channel.send('Hmm.. I dont seem to have this command!');
}*/

/*//Creating an Embed
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');*/
/*	execute(message, args) {
		const info = require('../info.json');
		var today = new Date();

		var msg;
		const day=today.getDay();
		msg = '> Day:' + info.days[day] + '\n> Today\'s Classes\n```\n';
		periods = info.routine[day]._periods;
		teachers = info.routine[day]._teachers;

		var i = 0;
		while (periods[i] != "END") {
			msg += periods[i] + '\t' + '|' + teachers[i] + '\n';
			i++;
		}
		msg += '```';

		message.channel.send(msg);
	},
*/
/*
const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`${info.days[day]}`)
  .setURL('https://time.is/')
  .setAuthor('075 BCT AB', 'https://i.imgur.com/OQwR8CB.png', 'https://teams.microsoft.com/_?culture=en-us&country=US&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/school//?ctx=teamsGrid')
  .setDescription()
  .setThumbnail('https://i.imgur.com/cuLTlNe.png')
  .addFields(msg)
  .setTimestamp()
  .setFooter('Have a boring day studying! :P', 'https://i.imgur.com/cuLTlNe.png');
message.channel.send(exampleEmbed);*/

/*module.exports = {
	name: 'args',
	args: true,
	usage: 'rt!args <arg_list>',
	description: 'Sends a list of inputted arguments',
	execute(message, args) {
	  message.channel.send(`Argument list: ${args}\nCount: ${args.length}`);
	},
};
*/
/*console.log(args[0]);
var index = channelName.length;
console.log(channelName.search("<"));
console.log(channelName.search(">"));
console.log(index - 2);
console.log(
  channelName.substr(
    channelName.search("<") + 2,
    channelName.search(">") - 2
  )
);*/

/*message.guild.channels.create("routine-notifications", {
  type: "text",
});
const yourchannel = message.guild.channels.find(
  (channel) => channel.name === "General"
);*/

/*const object = {'a': 1, 'b': 2, 'c' : 3};
for (const [key, value] of Object.entries(message.guild.channels.cache)) {
  console.log(key);
}
message.channel.send("Task Scheduled");*/

/*var notificationChannel = message.guild.channels.cache.find(
  (u) => u.name == "routiney-notifications"
);
if (notificationChannel == undefined) {
  message.guild.channels.create("routiney-notifications", {
    type: "text",
  });
  var notificationChannel = message.guild.channels.cache.find(
    (u) => u.name == "routiney-notifications"
  );
  notificationChannel.send(" Notifications turned on ");

  message.channel.send(
    "Notification channel created and notifications turned on "
  );
} else {
  message.channel.send("Notification turned on ");
}*/

/*notificationChannel.delete();

var j = schedule.scheduleJob("17 17 * * *", function () {
  message.channel.send("This will print at 17:17.");
});*/
