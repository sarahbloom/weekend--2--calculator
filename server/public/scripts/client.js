$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery loaded');
    $('.calculate').on('click', submitEquation);
}

function submitEquation(){
    let firstDigit = $('#firstNumber').val();
    let secondDigit = $('#secondNumber').val();
    let numbersSubmitted = { firstDigit: firstDigit, secondDigit: secondDigit}
    console.log(firstDigit, secondDigit);
    $.ajax({
        type: "POST",
        data: numbersSubmitted,
        url: "/equation"
    }).done(function (response) {
    console.log('success!');
    })
}
