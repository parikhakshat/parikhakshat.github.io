let departures = ["17:50","12:50","09:50","03:50"]
var date = new Date()

function playAnimation() {
	var animationHtml = document.querySelector('.animation');
	animationHtml.setAttribute('id','active');
}

function stopAnimation() {
	var animationHtml = document.querySelector('.animation');
	animationHtml.removeAttribute('id');
}

function testFunctionality() {
	var date = new Date()
	var full = date.getHours().toString() + ":" + (date.getMinutes() + 4).toString()
	departures.push(full)
	console.log(departures);
}

function removeFunctionality() {
	departures.pop();
}

function setTime() {
var hour = date.getHours()
var minute = date.getMinutes()
var seconds = date.getSeconds()
var hourHtml = document.getElementById("hour")
var minuteHtml = document.getElementById("minutes")
var secondHtml = document.getElementById("seconds")
var prefix = "am"
var prefixHtml = document.getElementById("prefix")
if (minute < 10 ) {
	minute  = "0" + minute.toString()
}

if (hour > 12) {
	prefix = "pm"
	hour = hour - 12
}
hourHtml.innerHTML = hour
minuteHtml.innerHTML = minute
secondHtml.innerHTML = seconds
prefixHtml.innerHTML = prefix
//console.log(date);
var t = setTimeout(setTime,1000);
}



function checkDepartures() {

	var i;
for (i = 0; i < departures.length; i++) {
	var hoursandmin = departures[i].split(":");
	console.log(departures[0]);
	console.log(departures[1]);
if (parseInt(date.getHours())  == parseInt(hoursandmin[0]) && parseInt(date.getMinutes()) > (parseInt(hoursandmin[1]) - 10) && parseInt(date.getMinutes()) < parseInt(hoursandmin[1])) {
	playAnimation();
} else {
	stopAnimation();
}
}
var b = setTimeout(checkDepartures,10000);
}


$(document).ready(function(){
    setTime();
	checkDepartures();
})
