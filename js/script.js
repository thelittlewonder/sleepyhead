document.getElementById("sleeplater").addEventListener("click", function (event) {
    "use strict";
    event.preventDefault();
    let hour, min, timeset;
    hour = parseInt(document.formmain.formhrs.value);
    min = parseInt(document.formmain.formmins.value);
    if (isNaN(hour) || isNaN(min)) {
        alert("Choose A Valid Time,Please!");
        return;
    }
    timeset = document.formmain.formtime.value;
    var uphour = new Array(4);
    var upmin = new Array(4);
    var upset = new Array(4);
    uphour[0] = hour - 9;
    upmin[0] = min;
    upset[0] = timeset;
    if (uphour[0] < 0) {
        uphour[0] = 12 + uphour[0];
        upset[0] = (upset[0] === "AM") ? "PM" : "AM";
    }
    if (uphour[0] == 0) {
        uphour[0] = 12 + uphour[0];
        upset[0] = (upset[0] === "PM") ? "PM" : "AM";
    }
    if (uphour[0] > 12) {
        uphour[0] = uphour % 12;
        upset[0] = (upset[0] === "AM") ? "PM" : "AM";
    }
    let i;
    for (i = 1; i < uphour.length; i++) {
        upset[i] = upset[i - 1];
        uphour[i] = uphour[i - 1] + 1;
        upmin[i] = upmin[i - 1] + 30;
        if (upmin[i] >= 60) {
            upmin[i] = upmin[i] % 60;
            uphour[i] += 1;
        }
        if (uphour[i] > 12) {
            uphour[i] = uphour[i] % 12;
            //upset[i] = (upset[i - 1] === "AM" && upset[i-1] > 12) ? "PM" : "AM";
        }
        if (uphour[i] === 12) {
            upset[i] = (upset[i - 1] === "AM") ? "PM" : "AM";
        }
    }
    for (i = 0; i < uphour.length; i++) {
        if (uphour[i] <= 9) {
            uphour[i] = 0 + '' + uphour[i];
        }
        if (upmin[i] <= 9) {
            upmin[i] = 0 + '' + upmin[i];
        }
    }
    for (i = 0; i < uphour.length; i++) {
        var temp = "dive" + i;
        document.getElementById(temp).innerHTML = uphour[i] + ":" + upmin[i] + " " + upset[i];
    }
    document.getElementById('msg2').style.display = "block";
    document.getElementById('times2').style.display ="flex";
});

document.getElementById("sleepnow").addEventListener("click", function (event) {
    "use strict";
    event.preventDefault();
    let current = new Date();
    let hour, min, timeset;
    hour = parseInt(current.getHours());
    min = parseInt(current.getMinutes());
    timeset = "AM";
    if (hour > 12) {
        hour = hour % 12;
        timeset = "PM";
    }
    if (hour === 0) {
        hour = 12;
        timeset = "AM";
    }
    let i;
    let minTemp = min + 15;
    if (minTemp >= 60) {
        minTemp = minTemp % 60;
        hour = hour + 1;
    }
    if (hour > 12) {
        hour = hour % 12;
        timeset = "PM";
    }
    if (hour === 0) {
        hour = 12;
        timeset = "AM";
    }
    var nexthour = new Array(7);
    var nextmin = new Array(7);
    var nextset = new Array(7);
    nexthour[0] = hour;
    nextmin[0] = minTemp;
    nextset[0] = timeset;
    for (i = 1; i < nexthour.length; i++) {
        nexthour[i] = nexthour[i - 1] + 1;
        nextmin[i] = nextmin[i - 1] + 30;
        nextset[i] = nextset[i - 1];
        if (nextmin[i] > 60) {
            nextmin[i] = nextmin[i] % 60;
            nexthour[i] = nexthour[i] + 1;
        }
        if (nexthour[i] >= 12) {
            nexthour[i] = nexthour[i] % 12;
            nextset[i] = "AM";
        }
        if (nexthour[i] === 0) {
            nexthour[i] = 12;
            nextset[i] = "AM";
        }
    }

    for (i = 0; i < nexthour.length; i++) {
        if (nexthour[i] <= 9) {
            nexthour[i] = 0 + '' + nexthour[i];
        }
        if (nextmin[i] <= 9) {
            nextmin[i] = 0 + '' + nextmin[i];
        }
    }
    for (i = 1; i < nexthour.length; i++) {
        var temp = "div" + i;
        document.getElementById(temp).innerHTML = nexthour[i] + ":" + nextmin[i] + " " + nextset[i] + '<br>';
    }
    document.getElementById('msg1').style.display = "block";
    document.getElementById('times1').style.display ="flex";
});
