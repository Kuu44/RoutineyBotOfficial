module.exports = {
  name: 'today',
  args: false,
  dontShow: false,
  description: 'The bread and butter of Routiney!',
  execute(message, args, bot) {
    const msgCreate = require('../functions/post.js');
    const postEmbed = require('../functions/postEmbed.js');
    const {
      getCurrTime,
      getDay
    } = require('../functions/timeConvert.js');
    const {info} = require('../info.js');

    const day = getDay(info[message.guild.id].timeZoneFix);

    if (day == 6) {
      message.channel.send(`Its a Saturday :tada:. Ja, jiiley apni jindagi, <@!${message.author.id}>! :partying_face:`);
      return;
    }
    const msg = msgCreate(day, message.guild.id);
    postEmbed(day, message.channel, msg, 'Today\'s Classes:', message.guild.id);
  }
};
