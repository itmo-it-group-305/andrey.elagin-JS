/**
 * Created by daddyingrave on 25.11.15.
 */

var redRound = document.getElementById('red');
var yellowRound = document.getElementById('yellow');
var greenRound = document.getElementById('green');
var button = document.getElementById('on');


function switchOn () {
    setTimeout(function () {
        redRound.style.background = 'red';
    }, 100);

    setTimeout(function () {
        redRound.style.background = '';
    }, 2000);

    setTimeout(function () {
        yellowRound.style.background = 'yellow';
    }, 2000);

    setTimeout(function () {
        yellowRound.style.background = '';
    }, 4000);

    setTimeout(function () {
        greenRound.style.background = 'green';
    }, 4000);

    setTimeout(function () {
        greenRound.style.background = '';
    }, 6000);
}

function dance () {
    setInterval(function () {
        redRound.style.background = 'red';
        setInterval(function () {
            redRound.style.background = '';
        }, 650)
    }, 750);

   setInterval(function () {
        greenRound.style.background = 'green';
        setInterval(function () {
            greenRound.style.background = '';
        }, 750)
    }, 850);

    setInterval(function () {
        yellowRound.style.background = 'yellow';
        setInterval(function () {
            yellowRound.style.background = '';
        }, 850)
    }, 950);
}



