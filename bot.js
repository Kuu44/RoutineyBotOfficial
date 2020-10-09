// require the discord.js module
const fs = require('fs');
const Discord = require('discord.js');

const {prefix} = require('./auth.json');
//const {token} = require('./secrets.json');

// Initialize Discord Bot
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

var {info:infos} = require('./info.js');
var schedule = require("node-schedule");
const scheduleNotification=require("./functions/scheduleNotifications.js")

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  //setting a new item in the collection
  bot.commands.set(command.name, command);
}

//for help.js
const helpCommand = require('./functions/help.js');
bot.commands.set(helpCommand.name, helpCommand);

//bot.login(token);
bot.login(process.env.BOT_TOKEN);

//Bot commands

let logChannel;
bot.channels.cache.map((channel) => {
  if (channel.id == '763767420908732448') {
    logChannel=channel;
  }
});

bot.once('ready', () => { //Only triggers once after logging in
  console.log('Ready!');

    for(const serverId in infos)
    {
      let info=infos[serverId]
      //console.log(info[property].channelId)
      bot.channels.cache.map((channel)=>{
      if(channel.id==info.channelId) {
      console.log(channel.name);
      //channel.send(" Sorry I was asleep :sweat_smile: I'm awake now !");
        try{
          scheduleNotification(channel,info,schedule,serverId,bot);
        }catch(e)
        {
          console.log(e);
          logChannel.send(`Error scheduling! in ${channel.guild.name}'s ${channel.name} :slight_smile:`);
        }
      }
    });
    }
});

bot.on('message', message => {
  //logs everything typed
  //console.log(message.content);

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if(message.author.id=='421499713880326155') {message.channel.send('Saley Chutiya, ley:');}
  if(message.author.id=='550752032198361098') {message.channel.send('Ok, my master');}
  if(message.author.id=='550401217407352832') {message.channel.send('Oi Bokeyyyy! Kasto xan ta 5 jana?');}
  if(message.author.id=='550863016665546752') {message.channel.send('Yo Nigga! :sunglasses:');}
  if(message.author.id=='550399525668257898') {message.channel.send('Aye kukur! Sanchai xas? :dog:');}

  if(message.author.id=='391583358146052097') {message.channel.send('Yo ma man Nisan <:Amusing:749565989179359323>! How\'s _da Playa_ doing?');}
  if(message.author.id=='591462128951623706') {message.channel.send('Yo ma man Aabhusan <:Amusing:749565989179359323>! I see you\'re finally using the bot with the _better_ code, Here\'s your request');}
  if(message.author.id=='626343148649709580') {message.channel.send('**Dank Brooooo** :punch:');}

  var args = message.content.slice(prefix.length).trim().split(/ +/);
  var commandName = args.shift().toLowerCase();

  if (!bot.commands.has(commandName)) return message.channel.send(`Hmm I dont seem to have this command, ${message.author}!:slight_smile:\nTry **rt! help** for more details!`);
  const command = bot.commands.get(commandName);
  if (command.args && !args.length) {
    return message.channel.send(`You didn't provide any argument, ${message.author} :sweat_smile:!\nUsage: ${command.usage}`);
  }
  try {
    command.execute(message, args, bot);
  } catch (error) {
    console.error(error);
    message.reply('There was an error trying to execute that command! :slight_smile:');
  }
});
