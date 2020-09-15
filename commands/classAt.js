module.exports = {
  name: 'classat',
  args: true,
  dontShow: false,
  usage: 'rt! classat <dayOfWeek> <Hour(in 24)> <Minute>',
  description: 'shows class at the given time',
  execute(message, args) {
    const Discord = require('discord.js');
    var info = require('../info.js');
    info = info[message.guild.id];

    const sendCurrent = require('../functions/sendCurrent.js');
    const {
      inMinutes,
      convertTime,
      getTime,
      getCurrTime
    } = require('../functions/timeConvert.js');

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
        message.channel.send('You need to enter the name of a day :sweat_smile:\nUsage:**rt! sample <dayOfWeek> <Hour(in 24)> <Minute>**');
        return;
    }

    var currTime;
    if (!args[1]) {
      message.channel.send('You forgot to enter an hour :sweat_smile:\nUsage:**rt! sample <dayOfWeek> <Hour(in 24)> <Minute>**');
      return;
    }
    if (args.length == 2) {
      args.push(0);
      args[2] = 0;
    }
    if ((args[1] > 24 && args[1] > 0) || (args[2] > 59 && args[2] >= 0)) {
      message.channel.send('Hours & minutes dont go over 24 or 59 :sweat_smile:\nUsage:**rt! sample <dayOfWeek> <Hour(in 24)> <Minute>**');
      return;
    } else currTime = [args[1], args[2]];

    var msg;
    var classTime;

    const emotes = info.routine[day]._emotes;
    const periods = info.routine[day]._periods;
    const teachers = info.routine[day]._teachers;
    const timing = info.routine[day]._timing;
    const emotePNG = info.routine[day]._emotePNGs;

    //time is an array of form : [[startHour,startMinute], [startMinute,endMinute]]; startHour= time[0][0]
    //function to calculate "now" time
    var time = 0;
    var position = 0;
    const nowTime = inMinutes(currTime);
    while (position < timing.length && !time) {
      const perStart = inMinutes(timing[position][0]);
      const perEnd = inMinutes(timing[position][1]);
      if ((nowTime > perStart) && (nowTime < perEnd)) {
        time = timing[position];
        break;
      }
      position++;
    }

    const currentFormattedTime = convertTime(currTime);
    if (!time) {
      msg = {
        period: 'No Classes at that time',
        teacher: 'Ja beta, jiiley apni jindagi :smile:',
        quote: '<Time>: ' + currentFormattedTime,
        thumbnail: 'https://i.imgur.com/cuLTlNe.png'
      };
    } else {
      switch (periods[position]) {
        case 'B':
          msg = {
            period: 'BREAK :exploding_head:',
            teacher: 'Go Wild :zany_face:',
            quote: '<Time> :' + currentFormattedTime,
            thumbnail: 'https://i.imgur.com/cuLTlNe.png'
          };
          break;
        case ' ':
          msg = {
            period: 'Free Period :zany_face:',
            teacher: 'Time for your gaming :video_game:!',
            quote: '<Time> :' + currentFormattedTime,
            thumbnail: 'https://i.imgur.com/cuLTlNe.png'
          };
          break;
        default:
          msg = {
            period: periods[position],
            teacher: 'Teacher: ' + teachers[position],
            quote: ':rotating_light: Class Time :rotating_light:',
            thumbnail: emotePNG[position]
          };
      }
    }
    sendCurrent(day, position, msg, message.channel, message.guild.id);
  }
};
