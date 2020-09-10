function msgCreate(day) {
  const info = require('../info.js');
  const {
    inMinutes,
    convertTime,
    getTime,
    getCurrTime
  } = require('./timeConvert.js');
  var msg = [];
  const emotes = info.routine[day]._emotes;
  const periods = info.routine[day]._periods;
  const teachers = info.routine[day]._teachers;
  const timing = info.routine[day]._timing;

  var i = 0;
  var time;
  while (periods[i] != "END") {
    //console.log(i);
    switch (i + 1) {
      case 1:
        time = `1st Period`;
        break;
      case 2:
        time = `2nd Period`;
        break;
      case 3:
        time = `3rd Period`;
        break;
      default:
        time = `${i+1}th Period`;
    }
    time += ` • ${convertTime(timing[i][0])} - ${convertTime(timing[i][1])}`;
    switch (periods[i]) {
      case 'B':
        msg.push({
          name: 'BREAK :exploding_head:',
          value: time
        });
        break;
      case ' ':
        msg.push({
          name: 'Free Period :zany_face:',
          value: time
        });
        break;
      default:
        msg.push({
          name: ' ' + emotes[i] + ' ' + periods[i] + '  | ' + teachers[i],
          value: time
        });
    }
    i++;
  }
  return msg;
}

module.exports = msgCreate;
