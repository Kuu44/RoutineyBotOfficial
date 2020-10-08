function giveToday(channel, serverId) {
  const msgCreate = require('./post.js');
  const postEmbed = require('./postEmbed.js');
  const {
    getCurrTime,
    getDay
  } = require('./timeConvert.js');
  const {info} = require('../info.js');

  const day = getDay(info[serverId].timeZoneFix);

  if (day == 6) {
    channel.send(`Its a Saturday :tada:. Ja, jiiley apni jindagi, gaich! :partying_face:`);
    return;
  }
  const msg = msgCreate(day, serverId);
  postEmbed(day, channel, msg, 'Today\'s Classes:', serverId);
}
module.exports = giveToday;
