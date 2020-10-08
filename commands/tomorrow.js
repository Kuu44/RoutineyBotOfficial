module.exports = {
  name: 'tomorrow',
  args: false,
  dontShow: false,
  description: 'The bread and butter of Routiney but for the future!',
  execute(message, args, bot) {
    const msgCreate = require('../functions/post.js');
    const postEmbed = require('../functions/postEmbed.js');
    const {
      getCurrTime,
      getDay
    } = require('../functions/timeConvert.js');
    const {info} = require('../info.js');

    var day = getDay(info[message.guild.id].timeZoneFix) + 1;
    day = (day > 6) ? 0 : day;
    if (day===6) {
      return message.channel.send(`Its a Saturday :tada:. Ja, jiiley apni jindagi, <@!${message.author.id}>! :partying_face:`);
    }
    if (day == 6) {
      message.channel.send(`Its a Saturday :tada:. Ja, jiiley apni jindagi, <@!${message.author.id}>! :partying_face:`);
      return;
    }
    const msg = msgCreate(day, message.guild.id);
    postEmbed(day, message.channel, msg, 'Tomorrow\'s Classes:', message.guild.id);
  },
};
