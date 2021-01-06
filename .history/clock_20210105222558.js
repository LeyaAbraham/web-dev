window.onload = init();


function init() {
    var seconds = 00;
    var nano = 00;

    var interval;

    document.getElementById("startClock").onclick = start();
    document.getElementById("startClock").onclick = stop();
    document.getElementById("startClock").onclick = reset();

}

function start() {
    clearInterval(interval);
    interval = setInterval(runTimer, 10);

}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    document.getElementById("nano").innerHTML = "00";
    document.getElementById("seconds") = "00";
}

function runTimer() {
    nano++;
    if (nano > 9) {
        document.getElementById("tens").innerHTML = tens;
    } else if (nano <= 9) {
        document.getElementById("tens").innerHTML = "0" + tens;
    } else if (nano > 99) {
        seconds++;
        nano = 0;
        document.getElementById("seconds") = "0" + seconds;

    }

    if (seconds > 9) {
        document.getElementById("seconds") = seconds;
    }
}