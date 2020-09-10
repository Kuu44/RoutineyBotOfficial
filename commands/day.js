module.exports = {
  name: 'day',
  args: true,
  usage: 'rt!day <day of the week>',
  description: 'Shows routine of a day!',
  execute(message, args) {
    const msgCreate = require('../functions/post.js');
    const postEmbed = require('../functions/postEmbed.js');
    var day;
    var dayT = args[0].toLowerCase();

    switch (dayT) {
      case "sunday":
        day = 0;
        break;
      case "monday":
        day = 1;
        break;
      case "tuesday":
        day = 2;
        break;
      case "wednesday":
        day = 3;
        break;
      case "thursday":
        day = 4;
        break;
      case "friday":
        day = 5;
        break;
      case "saturday":
        message.channel.send(`Its a Saturday :tada:. Ja, jiiley apni jindagi, <@!${message.author.id}>! :partying_face:`);
        return;
        break;
      default:
        message.channel.send('You need to enter the name of a day :sweat_smile:');
        return;
    }

    const msg = msgCreate(day);
    postEmbed(day, message.channel, msg, 'Classes For The Day:');
  },
};
