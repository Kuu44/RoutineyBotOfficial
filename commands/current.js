module.exports = {
    name: 'current',
    args: false,
    description: 'What\'s the current torture on the menu?',
    execute(message, args) {
      const Discord = require('discord.js');
      const info = require('../info.js');
      const sendCurrent = require('../functions/sendCurrent.js');
      const {
        inMinutes,
        convertTime,
        getTime,
        getCurrTime
      } = require('../functions/timeConvert.js');

      var today = new Date();
      const day = today.getDay();

      var currTime = getCurrTime();

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
        //console.log(position);
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
          period: 'No Classes Right Now',
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
              teacher: 'Go resume your gaming :video_game:!',
              quote: '<Time> :' + currentFormattedTime,
              thumbnail: 'https://i.imgur.com/cuLTlNe.png'
            };
            break;
          default:
            msg = {
              period: periods[position],
              teacher: 'Teacher: ' + teachers[position],
              quote: ':rotating_light: Class in session :rotating_light:',
              thumbnail: emotePNG[position]
            };
        }
      }
      sendCurrent(day, currTime, position, msg, message.channel);
    }
  };
