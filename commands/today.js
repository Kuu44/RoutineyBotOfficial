module.exports = {
  name: 'today',
  args: false,
  description: 'The bread and butter of Routiney!',
  execute(message, args) {
    const msgCreate = require('../functions/post.js');
    const postEmbed = require('../functions/postEmbed.js');
    var today = new Date();
    const day = today.getDay();

    const msg = msgCreate(day);
    postEmbed(day, message.channel, msg, 'Today\'s Classes:');
  }
};
