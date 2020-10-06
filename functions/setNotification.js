// Parameters info
// schedule= schedule object imported from node-schedule package
// channel= channel object where you want to display notifications
// notificationMessage = the string that you want to display
// time = time array of format [hours,minutes]

const setNotifications = (day, schedule, channel, notificationMessage, time, position, serverId) => {
  const sendCurrent = require('./sendCurrent.js');
  var {info} = require('../info.js');
  info = info[serverId];
  const {
    timeZoneFix
  } = require('./timeConvert.js');

  const periods = info.routine[day]._periods;
  const teachers = info.routine[day]._teachers;
  const emotePNG = info.routine[day]._emotePNGs;
  var msg = {
    period: periods[position],
    teacher: 'Teacher: ' + teachers[position],
    quote: notificationMessage,
    thumbnail: emotePNG[position]
  };
  switch (periods[position]) {
    case 'B':
      msg = {
        period: 'BREAK :exploding_head:',
        teacher: 'Go Wild :zany_face:',
        quote: ':video_game: Break' + notificationMessage + ' :video_game:',
        thumbnail: 'https://i.imgur.com/cuLTlNe.png'
      };
      break;
    case ' ':
      msg = {
        period: 'Free Period :zany_face:',
        teacher: 'Time for your gaming :video_game:!',
        quote: ':video_game: Free Period' + notificationMessage + ' :video_game:',
        thumbnail: 'https://i.imgur.com/cuLTlNe.png'
      };
      break;
    default:
      msg = {
        period: periods[position],
        teacher: 'Teacher: ' + teachers[position],
        quote: ':rotating_light: Class' + notificationMessage + ' :rotating_light:',
        thumbnail: emotePNG[position]
      };
  }
  //Time Zone conversion
  const timeZone = timeZoneFix(time, info.timeZoneFix);
  // const timeZone = time;
  console.log(timeZone);
  var j = schedule.scheduleJob(`${timeZone[1]} ${timeZone[0]} * * ${day}`, function() {
    sendCurrent(day, position, msg, channel, serverId);
  });
};
module.exports = setNotifications;
