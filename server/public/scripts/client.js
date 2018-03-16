$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery loaded');
    $('.calculate').on('click', submitEquation);
}

//GET
function getallEquations() {
    $.ajax({
        type: "GET", 
        url: "/equation"
    }).done(function(response){
        console.log('done!');
        // appendToDom(response); // response is the array
    })
}

//POST
function submitEquation(){
    let firstDigit = $('#firstNumber').val();
    let secondDigit = $('#secondNumber').val();
    let numbersSubmitted = { firstDigit: firstDigit, secondDigit: secondDigit}
    console.log(numbersSubmitted);
    $.ajax({
        type: "POST",
        data: numbersSubmitted,
        url: "/equation"
    }).done(function (response) {
        console.log('success!');
        getallEquations() 
    })
}

// function appendToDom(){
//     $('#history').clear();
//     for (let equation of equationHistory){
//         console.log('Equation: ', equation);
//     }
// }
