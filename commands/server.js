module.exports = {
  name: 'server',
  args: false,
  dontShow: false,
  description: 'Gives info on server',
  execute(message, args) {
    const Discord = require('discord.js');
    const {
      info,
      helpers
    } = require('../info.js');
    const inf = info[message.guild.id];

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${message.guild.name}`)
      .setURL("https://teams.microsoft.com/_#/school//?ctx=teamsGrid")
      .setDescription(inf.className)
      .setThumbnail(inf.classLogo)
      .addFields({
        name: "Member Count",
        value: message.guild.memberCount
      })
      .setTimestamp()
      .setFooter('Have a boring day studying! :P', 'https://i.imgur.com/QrtHFpz.png');
    message.channel.send(exampleEmbed);
  },
};
