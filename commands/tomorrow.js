module.exports = {
  name: 'tomorrow',
  args: false,
  description: 'The bread and butter of Routiney but for the future!',
  execute(message, args) {
    const msgCreate = require('../functions/post.js');
    const postEmbed = require('../functions/postEmbed.js');
    var today = new Date();
    var day = today.getDay() + 1;
    day = (day > 6) ? 0 : day;
    if (day===6) {
      return message.channel.send(`Its a Saturday :tada:. Ja, jiiley apni jindagi, <@!${message.author.id}>! :partying_face:`);
    }
    const msg = msgCreate(day);
    postEmbed(day, message.channel, msg, 'Tomorrow\'s Classes:');
  },
};
