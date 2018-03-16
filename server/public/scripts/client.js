$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery loaded');
    clickListeners();
}

function clickListeners(){
    $('#addition').on('click', submitAddition);
    $('#subtraction').on('click', submitSubtraction);
    $('#division').on('click', submitDivision);
    $('#multiplication').on('click', submitMultiplication);
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
function submitAddition(){
    let firstDigit = $('#firstNumber').val();
    let secondDigit = $('#secondNumber').val();
    let numbersSubmitted = { firstDigit: firstDigit, secondDigit: secondDigit, type: "Add" }
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

function submitSubtraction(){
    let firstDigit = $('#firstNumber').val();
    let secondDigit = $('#secondNumber').val();
    let numbersSubmitted = { firstDigit: firstDigit, secondDigit: secondDigit, type: "Subtract" }
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

function submitDivision(){
    let firstDigit = $('#firstNumber').val();
    let secondDigit = $('#secondNumber').val();
    let numbersSubmitted = { firstDigit: firstDigit, secondDigit: secondDigit, type: "Divide" }
    console.log(numbersSubmitted);
    $.ajax({
        type: "POST",
        data: numbersSubmitted,
        url: "/equation"
    }).done(function(response){
        console.log('success!');
        getallEquations()
    })
}

function submitMultiplication(){
    let firstDigit = $('#firstNumber').val();
    let secondDigit = $('#secondNumber').val();
    let numbersSubmitted = { firstDigit: firstDigit, secondDigit: secondDigit, type: "Multiply" }
    console.log(numbersSubmitted);
    $.ajax({
        type: "POST",
        data: numbersSubmitted,
        url: "/equation"
    }).done(function(response){
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
