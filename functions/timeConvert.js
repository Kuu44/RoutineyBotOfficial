function inMinutes(time) {
  return time[0] * 60 + time[1];
}
function convertTime(clock) {
  var firstM;
  var hr = clock[0],
    min = clock[1];
  if (clock[0] < 12) firstM = 'AM';
  else firstM = 'PM';
  if (clock[0] > 12) hr = clock[0] - 12;
  if (clock[1] < 10) min = '0' + clock[1];

  return `${hr}:${min}${firstM}`;
}

//Time 'preTime' minutes early
const getTime = (time, preTime) => {
  const info = require('../info.js');
  var total = time[0] * 60 + time[1];
  total -= preTime;
  return [Math.floor(total / 60), total % 60];
}

function timeZoneFix(time, timeZoneFix) {
  var total = time[0] * 60 + time[1];
  var totalFix = timeZoneFix[0] * 60 + timeZoneFix[1];
  total -= totalFix;
  if (total < 0) total += 1439;
  return [Math.floor(total / 60), total % 60];
}

function getCurrTime(timeZoneFix) {
  var today = new Date();
  var time = [today.getHours(), today.getMinutes()];
  //return time;
  var total = time[0] * 60 + time[1];
  var totalFix = timeZoneFix[0] * 60 + timeZoneFix[1];
  total += totalFix;
  if (total > 1439) total -= 1439;
  return [Math.floor(total / 60), total % 60];
}

function getDay(timeZoneFix){
  const today = new Date();
  var day = today.getDay();
  var time = today.getHours() * 60 + today.getMinutes();

  var timeFix = timeZoneFix[0] * 60 + timeZoneFix[1];
  time += timeFix;

  if (time > 1439) day++;
  if(day>6) day=0;
  return day;
}
module.exports = {
  inMinutes,
  convertTime,
  getTime,
  getCurrTime,
  timeZoneFix,
  getDay
};
