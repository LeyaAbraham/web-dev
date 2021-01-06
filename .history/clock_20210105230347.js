window.onload = function () {

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
    document.getElementById("nano").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
}

function runTimer() {
    var num = nano++;
    console.log(num);

    if (nano > 9) {
        console.log("in if");
        document.getElementById("nano").innerHTML = nano;
    }
    if (nano < 9) {
        document.getElementById("nano").innerHTML = "0" + nano;
    }
    if (nano > 99) {
        seconds++;
        nano = 0;
        document.getElementById("seconds").innerHTML = "0" + seconds;

    }

    if (seconds > 9) {
        document.getElementById("seconds") = seconds;
    }
}