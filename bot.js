// require the discord.js module
const fs = require('fs');
const Discord = require('discord.js');

const {prefix} = require('./auth.json');
// const {token} = require('./secrets.json');

// Initialize Discord Bot
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  //setting a new item in the collection
  bot.commands.set(command.name, command);
}

//for help.js
const helpCommand = require('./functions/help.js');
bot.commands.set(helpCommand.name, helpCommand);

//Bot commands
bot.once('ready', () => { //Only triggers once after logging in
  console.log('Ready!');
});
 // bot.login(token);
bot.login(process.env.BOT_TOKEN);
bot.on('message', message => {
  //logs everything typed
  console.log(message.content);

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  var args = message.content.slice(prefix.length).trim().split(/ +/);
  var commandName = args.shift().toLowerCase();

  if (!bot.commands.has(commandName)) return message.channel.send(`Hmm I dont seem to have this command, ${message.author}!:sweat_smile:\nTry **rt! help** for more details!`);
  const command = bot.commands.get(commandName);
  if (command.args && !args.length) {
    return message.channel.send(`You didn't provide any argument, ${message.author} :sweat_smile:!\nUsage: ${command.usage}`);
  }
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('There was an error trying to execute that command! :sweat_smile:');
  }
});
