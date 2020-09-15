module.exports = {
  name: 'next',
  args: false,
  dontShow: false,
  description: 'What\'s the torture after this one?',
  execute(message, args) {
    const Discord = require('discord.js');
    var info = require('../info.js');
    info = info[message.guild.id];

    const sendCurrent = require('../functions/sendCurrent.js');
    const {
      inMinutes,
      getCurrTime,
      getDay
    } = require('../functions/timeConvert.js');

    const day = getDay(info.timeZoneFix);
    const currTime = getCurrTime(info.timeZoneFix);

    if (day == 6) {
      msg = {
        period: 'It\'s a Saturday yarrr..',
        teacher: 'Ja beta, jiiley apni jindagi :smile:',
        quote: '~',
        thumbnail: 'https://i.imgur.com/cuLTlNe.png'
      };
      sendCurrent(day, 0, msg, message.channel, message.guild.id);
      return;
    }

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
    var posn = 0;
    const nowTime = inMinutes(currTime);

    if (nowTime < inMinutes(timing[0][0])) posn = -1; //for next
    else
      while (posn < timing.length && !time) {
        //console.log(posn);
        const perStart = inMinutes(timing[posn][0]);
        const perEnd = inMinutes(timing[posn][1]);
        if ((nowTime > perStart) && (nowTime < perEnd)) {
          time = timing[posn];
          break;
        }
        posn++;
      }

    //For next
    posn++;
    if(posn==0) time = timing[posn];
    else if (posn == timing.length) time = 0;

    if (!time) {
      msg = {
        period: 'No Classes After This',
        teacher: 'Ja beta, jiiley apni jindagi :smile:',
        quote: '~',
        thumbnail: 'https://i.imgur.com/cuLTlNe.png'
      };
    } else {
      switch (periods[posn]) {
        case 'B':
          msg = {
            period: 'BREAK :exploding_head:',
            teacher: 'Go Wild :zany_face:',
            quote: ':star_struck: Next Period :star_struck:',
            thumbnail: 'https://i.imgur.com/cuLTlNe.png'
          };
          break;
        case ' ':
          msg = {
            period: 'Free Period :zany_face:',
            teacher: 'Go resume your gaming :video_game:!',
            quote: ':yum: Next Period :yum:',
            thumbnail: 'https://i.imgur.com/cuLTlNe.png'
          };
          break;
        default:
          msg = {
            period: periods[posn],
            teacher: 'Teacher: ' + teachers[posn],
            quote: ':rotating_light: Next Class :rotating_light:',
            thumbnail: emotePNG[posn]
          };
      }
    }
    sendCurrent(day, posn, msg, message.channel, message.guild.id);
  }
};
