function postEmbed(day, channel, msg, description) {
  const Discord = require('discord.js');
  const info = require('../info.js');

  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${info.days[day]}`)
    .setURL('https://time.is/')
    .setAuthor(info.className, info.classLogo, info.classLink)
    .setDescription(description)
    .setThumbnail('https://i.imgur.com/cuLTlNe.png')
    .addFields(msg)
    .setTimestamp()
    .setFooter('Have a boring day studying! :P', 'https://i.imgur.com/cuLTlNe.png');
  channel.send(exampleEmbed);
}

module.exports = postEmbed;
