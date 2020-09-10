module.exports = {
  name: 'setchannel',
  args: false,
  description: 'Logs the channel from which message is sent (dev Only)',
  execute(message, args) {
    console.log(message.channel.id);
  }
};
