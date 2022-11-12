function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [hour,minute];

 // return [ month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function halfHour(){
  let timeArr = [];
  for (let i=0;i<24;i++){
    for (let j=0;j<60;j++){
      timeArr.push(formatNumber(i) +':' + formatNumber(j));
    }
  }
  return timeArr;
}
let timeArr = halfHour();

function setTimeHalf(){
  var thisDate = new Date(), thisTime = formatTime(thisDate),lastTimeArr = [],index = 0;
  
 timeArr.map(function(t,i){
    let tArr = t.split(":");
    if (thisTime[0] >= Number(tArr[0]) && thisTime[1] >= Number(tArr[1])){
      index = i;
    }
 })
 lastTimeArr = timeArr.slice(index);
  return lastTimeArr;
}



module.exports = {
  formatTime: formatTime,
  setTimeHalf:setTimeHalf,
  formatNumber:formatNumber
  
}
