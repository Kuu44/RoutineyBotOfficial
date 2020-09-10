module.exports = {
  name: 'time',
  args: false,
  description: 'Gives today\'s date and time',
  execute(message, args) {
    const Discord = require('discord.js');
    const info = require('../info.js');
    const {getCurrTime}=require('../functions/timeConvert.js');

    var today = new Date();
    var date = `${today.getDate()} ${info.months[(today.getMonth() + 1)]} ${today.getFullYear()}`;
    var time = getCurrTime();

    var hr,min,firstM;
    if(time[0]<12){
      firstM="AM";
    }
    else{
      firstM="PM"
    }
    if (time[0] < 13) {
      hr = time[0];
    } else {
      hr = time[0] - 12;
    }
    if (time[1] < 10) min = '0' + time[1];
    else min = time[1];

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(info.days[today.getDay()])
			.addFields({
				name: date,
				value: `${hr}:${min} ${firstM}`
			})
      .setURL('https://time.is/')
      .setThumbnail('https://i.imgur.com/cuLTlNe.png');

    message.channel.send(exampleEmbed);
  },
};
