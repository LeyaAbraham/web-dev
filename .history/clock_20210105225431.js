window.onload = function () {
    init();
}


function init() {

    var seconds = 0;
    var nano = 0;

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
    nano = 0;
    seconds = 0;
    document.getElementById("nano").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
}

function runTimer() {
    nano++;


    var num = parseInt(nano);
    console.log(num);
    if (num > 9) {
        console.log("in if");
        document.getElementById("nano").innerHTML = nano;
    }
    if (num <= 9) {
        document.getElementById("nano").innerHTML = "0" + nano;
    }
    if (num > 99) {
        seconds++;
        nano = 0;
        document.getElementById("seconds").innerHTML = "0" + seconds;

    }

    if (parseInt(seconds) > 9) {
        document.getElementById("seconds") = seconds;
    }
}