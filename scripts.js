const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateTime(){
  var now = new Date();
  
  document.getElementById("time").innerText = 
    digitalClock(now.getHours(), 2) + ":" +
    digitalClock(now.getMinutes(), 2) + ":" +
    digitalClock(now.getSeconds(), 2);
  
  document.getElementById("date").innerText =
    now.getFullYear() + "/" +
    digitalClock(now.getMonth() + 1,2) + "/" +
    digitalClock(now.getDate(), 2) + " " +
    WEEKDAYS[now.getDay()];
}

updateTime();
setInterval(updateTime, 1000);

function digitalClock(number, digit){
  return String(number).padStart(digit, '0');
}
