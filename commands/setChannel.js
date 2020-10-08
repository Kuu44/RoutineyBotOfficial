module.exports = {
  name: 'setchannel',
  args: false,
  dontShow: true,
  description: 'Logs the channel from which message is sent (dev Only)',
  execute(message, args, bot) {
    console.log('Channel:'+message.channel.id+'\n');
    console.log('ServerId: '+message.guild.id);
  }
};
