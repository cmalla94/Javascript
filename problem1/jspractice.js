var today = new Date();
var dayArray = ["Sunday", "Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday"];
var theDay = today.getDay();

var hour = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();
var period ; 
(hour >= 0 && hour <= 11) ? period = "AM" : period = "PM";

if(hour === 0){
	hour = 12
}
else if (hour >= 13 && hour <= 23){
	hour -= 12;
};

var day = document.getElementById("today").innerText;
day = day + " " + dayArray[theDay];
document.getElementById("today").innerText = day;

var currentTime = document.getElementById("time").innerText;
currentTime = currentTime + " " + hour + " " + period
 + " : " + min + " : " + sec;
document.getElementById("time").innerText = currentTime;