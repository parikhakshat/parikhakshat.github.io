let departures = ["20:50", "12:50", "9:50", "3:50"]

function playAnimation() {
    //console.log("playing");
    var animationHtml = document.querySelector('.animation');
    animationHtml.setAttribute('id', 'active');
}

function night() {
    var animationHtml = document.querySelector('body');
    animationHtml.setAttribute('id', 'night');

    var animationHtml = document.getElementById('clouds');
    animationHtml.setAttribute('src', 'images/night-clouds.png');

    var animationHtml = document.getElementById('mountains');
    animationHtml.setAttribute('src', 'images/night-mountain.png');

    var animationHtml = document.getElementById('airport');
    animationHtml.setAttribute('src', 'images/night-airport.png');
}

function day() {
    var animationHtml = document.querySelector('body');
    animationHtml.setAttribute('id', 'day');

    var animationHtml = document.getElementById('clouds');
    animationHtml.setAttribute('src', 'images/day-clouds.png');

    var animationHtml = document.getElementById('mountains');
    animationHtml.setAttribute('src', 'images/day-mountains.png');

    var animationHtml = document.getElementById('airport');
    animationHtml.setAttribute('src', 'images/day-airport.png');
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
    var date = new Date()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var seconds = date.getSeconds()
    var hourHtml = document.getElementById("hour")
    var minuteHtml = document.getElementById("minutes")
    var secondHtml = document.getElementById("seconds")
    var prefix = "am"
    var prefixHtml = document.getElementById("prefix")
    if (minute < 10) {
        minute = "0" + minute.toString()
    }

    if (hour >= 18 || hour <= 4) {
        night();
        //console.log(hour);
    } else {
        day();
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
    var i;
    for (i = 0; i < departures.length; i++) {
        var hoursandmin = departures[i].split(":");
        //console.log(hoursandmin[0] + "fire" + hoursandmin[1]);
        //console.log(departures[i]);
        //console.log("Date hour"+parseInt(date.getHours()));
        //console.log("array hour"+parseInt(hoursandmin[0]));
        //console.log("Date minute"+parseInt(date.getMinutes()));
        //console.log("array minute"+parseInt(hoursandmin[1]));
        if (parseInt(date.getHours()) == parseInt(hoursandmin[0]) && parseInt(date.getMinutes()) >= (parseInt(hoursandmin[1]) - 10) && parseInt(date.getMinutes()) <= parseInt(hoursandmin[1])) {
            playAnimation();
        } else {
            stopAnimation();
        }
    }
    var t = setTimeout(setTime, 1000);
}




$(document).ready(function() {
    setTime();
})
