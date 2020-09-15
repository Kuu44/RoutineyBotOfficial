module.exports = {
  name: "notifications",
  args: false,
  dontShow: false,
  description: "Turns on the routine notifications",
  execute(message, args) {
    var info = require('../info.js');
    info = info[message.guild.id];

    const channelId = info.channelId;
    const routine = info.routine;
    const setNotification = require("../functions/setNotification");
    const {
      inMinutes,
      convertTime,
      getTime,
      getCurrTime
    } = require('../functions/timeConvert.js');
    const sendCurrent = require('../functions/sendCurrent.js');
    var schedule = require("node-schedule");


    var notificationChannel = message.guild.channels.cache.find(
      (u) => u.id == channelId
    );
    //Setting Notifications
    if (!info.notificationsON) {
      if (notificationChannel != undefined) {

        for (var day = 0; day < 6; day++){
          //Prints routine in the morning
          const todayComm = require(`./today.js`);
          schedule.scheduleJob(`45 15 * * ${day}`, function() {
            todayComm.execute(message, args);
          });

          routine[day]._periods.forEach((item, index) => {
            //console.log(item);
            if (item != 'END') {
              var notificationMessage = `  ${item}  ${routine[day]._teachers[index]} Start time : ${routine[day]._timing[index][0]} Notification time:   ${getTime(routine[day]._timing[index][0], info.preTime)} `;
              console.log('Day ' + day + ' ' + notificationMessage);

              setNotification(day, schedule, notificationChannel, ` starts in 15 minutes`, getTime(routine[day]._timing[index][0], info.preTime), index, message.guild.id);
              setNotification(day, schedule, notificationChannel, ` has started`, routine[day]._timing[index][0], index, message.guild.id);
            }
        });
      }

        //Saturday
        var j = schedule.scheduleJob(`45 15 * * 6`, function() {
          //var j = schedule.scheduleJob(`10 00 * * 6`, function() {
          const time = [10, 00];
          const msg = {
            period: 'It\'s Saturday :partying_face:',
            teacher: 'Time for your gaming :video_game:!',
            quote: 'Ja beta, jiiley apni jindagi',
            thumbnail: 'https://i.imgur.com/cuLTlNe.png'
          }
          sendCurrent(6, 10, msg, notificationChannel, message.guild.id);
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
