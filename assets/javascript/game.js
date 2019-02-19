/* 
PSEUDOCODE 

1. Computer generates a random number on page load
2. Each jewel is worth a random amount
3. User clicks a jewel icon
4. Depending on which jewel is clicked, that random amount is added to the user's number
5. User's number continues to increase with every jewel clicked
6. If user's number reaches the computer's number exactly, the user wins & gets a win point
7. If user overshoots the computer number, the user loses & gets a loss point
8. User and computer numbers reset
9. Values for the jewels reset

*/

//VARIABLES
var gameStart = false;
var computerNumber = 0;
var userNumber = 0;
var winsCount = 0;
var lossesCount = 0;

//FUNCTIONS
function generateComputerNumber() {
    return computerNumber = Math.floor((Math.random() * 120) + 19);
}

function genJewelNum() {
    return Math.floor((Math.random() * 12) + 1);
}

function jewelReset() {
    $('.jewels').each(function () {
        $(this).attr('value', genJewelNum());
    });
}

function roundReset() {
    userNumber = 0;
    computerNumber = 0;
    updateUser();
    jewelReset();
}

function roundStart() {
    if (computerNumber === 0) {
        $('#randomNumber').text(generateComputerNumber());
    } else {
        return;
    }
}

function updateUser() {
    $('#userNumber').text(userNumber);
}

function updateWins() {
    $('#wins').text(++winsCount);
}

function updateLosses() {
    $('#losses').text(++lossesCount);
}

function checkWinLoss() {
    if (userNumber === computerNumber) {
        alert('You win!');
        updateWins();
        roundReset();
        roundStart();
    }

    if (userNumber > computerNumber) {
        alert('You lost!');
        updateLosses();
        roundReset();
        roundStart();
    }
}
//PROGRAM

$('.jewels').on('click', function () {
    if (gameStart == true) {
        roundStart();
        if ($(this).attr('value') == 0) {
            $(this).attr('value', genJewelNum());
        }
        intVal = parseInt($(this).attr('value'));
        userNumber = intVal + userNumber;
        updateUser();
        checkWinLoss();
    } else {
        return;
    }
});

//Key Press to Start the Game
$(document).keyup(function () {
    gameStart = true;
    $('#pressAnyKey').text("START CLICKING GEMS!");

});