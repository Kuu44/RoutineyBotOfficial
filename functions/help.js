module.exports = {
  name: 'help',
  args: false,
  dontShow: false,
  description: 'Shows a list of all commands',
  execute(message, args) {
    const Discord = require('discord.js');
    const fs = require('fs');
    const {
      prefix
    } = require('../auth.json');
    var msg = [{
      name: 'help',
      value: 'Shows a list of all commands',
      inline: true
    }];

    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    var commandList = new Discord.Collection();
    for (const file of commandFiles) {
      const command = require(`../commands/${file}`);

      //setting a new item in the collection
      if (!command.dontShow) {
        commandList.set(command.name, command);
        msg.push({
          name: commandList.get(command.name).name,
          value: commandList.get(command.name).description,
          inline: true
        });
      }
    }

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`Routiney Help`)
      .setURL('https://github.com/Kuu44/RoutineyBot')
      .setAuthor('by Kuu44, Bishad and Goley', 'https://i.imgur.com/OQwR8CB.png', 'https://github.com/Kuu44/RoutineyBot')
      .setDescription('Prefix: ' + prefix + '\nList of Available Commands:')
      .setThumbnail('https://i.imgur.com/QrtHFpz.png')
      .addFields(msg)
      .setTimestamp()
      .setFooter('Now go ahead and get those classes sorted! ', 'https://i.imgur.com/QrtHFpz.png');

    message.channel.send(exampleEmbed);
  },
};
