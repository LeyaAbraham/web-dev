window.onload = function () {
    init();
}


function init() {

    var seconds = 00;
    var nano = 00;

    var interval;
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
    document.getElementById("reset").onclick = reset;

}

function start() {

    interval = setInterval(runTimer, 10);

}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    nano = 00;
    seconds = 00;
    document.getElementById("nano").innerHTML = nano;
    document.getElementById("seconds").innerHTML = seconds;
}

function runTimer() {
    nano++;
    console.log(nano);
    if (nano > 9) {
        document.getElementById("nano").innerHTML = nano;
    }
    if (nano <= 9) {
        document.getElementById("nano").innerHTML = "0" + nano;
    }
    if (nano > 99) {
        seconds++;
        nano = 0;
        document.getElementById("seconds") = "0" + seconds;

    }

    if (seconds > 9) {
        document.getElementById("seconds") = seconds;
    }
}