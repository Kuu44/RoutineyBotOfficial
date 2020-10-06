function sendCurrent(day, position, msg, channel, serverId) {
  const Discord = require('discord.js');
  var {
    info,
    teachers
  } = require('../info.js');
  info = info[serverId];
  const {
    inMinutes,
    convertTime
  } = require('./timeConvert.js');
  var time, classTime;
  if (day < 6) {
    const timing = info.routine[day]._timing;

    //time is an array of form : [[startHour,startMinute], [startMinute,endMinute]]; startHour= time[0][0]
    if (position < timing.length) time = timing[position];
    //console.log(position+' '+time+' '+timing[position]);
  }
  if (!time) {
    classTime = `Chill :wink:`;
  } else {
    classTime = convertTime(time[0]) + ' - ' + convertTime(time[1]);
  }

  var classLink;
  if (msg.linkPos == (-1)) classLink = "https://teams.microsoft.com/_#/school//?ctx=teamsGrid";
  else classLink = info.classLink[msg.linkPos];

  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(msg.period)
    .setURL(classLink)
    .setAuthor(info.className, info.classLogo, "https://teams.microsoft.com/_#/school//?ctx=teamsGrid")
    .setDescription(classTime)
    .setThumbnail(msg.thumbnail)
    .addFields({
      name: msg.teacher,
      value: msg.quote
    })
    .setTimestamp()
    .setFooter('Have a boring day studying! :P', 'https://i.imgur.com/QrtHFpz.png');
  channel.send(exampleEmbed);
}
module.exports = sendCurrent;
