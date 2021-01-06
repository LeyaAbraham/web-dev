window.onload = init();


function init() {
    var seconds = 00;
    var nano = 00;

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