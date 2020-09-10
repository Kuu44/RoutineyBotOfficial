module.exports = {
  name: "notifications",
  description: "Turn on the routine notifications",
  execute(message, args) {
    const {
      routine,

    } = require("../info.js");
    const setNotification = require("../functions/setNotification");
    const {
      inMinutes,
      convertTime,
      getTime
    } = require('../functions/timeConvert.js');
    const sendCurrent = require('../functions/sendCurrent.js');
    var schedule = require("node-schedule");

    const info = require('../info.js');
    const channelId = info.channelId;

    var notificationChannel = message.guild.channels.cache.find(
      (u) => u.id == channelId
    );
    //Setting Notifications
    if (!info.notificationsON) {
      if (notificationChannel != undefined) {
        for (var day = 0; day < 6; day++)
          routine[day]._periods.forEach((item, index) => {
            //console.log(item);
            if (item != 'END') {
              var notificationMessage = `  ${item}  ${routine[day]._teachers[index]} Start time : ${routine[day]._timing[index][0]} Notification time:   ${getTime(routine[day]._timing[index][0])} `;
              console.log('Day ' + day + ' ' + notificationMessage);

              setNotification(day, schedule, notificationChannel, ` starts in 15 minutes`, getTime(routine[day]._timing[index][0]), index);
              setNotification(day, schedule, notificationChannel, ` has started`, routine[day]._timing[index][0], index);
            }
          });

        //Saturday
        var j = schedule.scheduleJob(`15 45 * * 6`, function() {
        //var j = schedule.scheduleJob(`10 00 * * 6`, function() {
          const time = [10, 00];
          const msg = {
            period: 'It\'s Saturday :partying_face:',
            teacher: 'Time for your gaming :video_game:!',
            quote: 'Ja beta, jiiley apni jindagi',
            thumbnail: 'https://i.imgur.com/cuLTlNe.png'
          }
          sendCurrent(6, time, 10, msg, notificationChannel);
        });

        notificationChannel.send(" Notifications turned on ");
        info.notificationsON = true;
        message.channel.send(
          `Notifications turned on in <#${notificationChannel.id}> channel`
        );
      } else {
        message.channel.send(" Channel not found ");
      }
    } else {
      message.channel.send(`Notifications are already turned on in <#${notificationChannel.id}> channel :sweat_smile:`);
    }

  }
};
