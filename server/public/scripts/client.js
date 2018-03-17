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
    $('#reset').on('click', resetInputs);
}

//GET
function getallEquations() {
    $.ajax({
        type: "GET", 
        url: "/equation"
    }).done(function(response){
        console.log(response);
        appendToDom(response); // response is the array
    })
}

//POST
function submitAddition(){
    let firstDigit = $('#firstNumber').val();
    let secondDigit = $('#secondNumber').val();
    let numbersSubmitted = { firstDigit: firstDigit, secondDigit: secondDigit, type: "Add" }
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
    $.ajax({
        type: "POST",
        data: numbersSubmitted,
        url: "/equation"
    }).done(function(response){
        console.log('success!');
        getallEquations()
    })
}

function appendToDom(equationHistory){
    $('#history').empty();
    for (let equation of equationHistory){
        if (equation.type == "Add"){
            $('#history').append("<p>" + equation.firstDigit + ' + ' + 
                                equation.secondDigit + ' = ' + equation.total + "</p>");
        }
        else if (equation.type == "Subtract") {
            $('#history').append("<p>" + equation.firstDigit + ' - ' +
                                   equation.secondDigit + ' = ' + equation.total + "</p>");
        }
        else if (equation.type == "Divide") {
            $('#history').append("<p>" + equation.firstDigit + ' ÷ ' +
                equation.secondDigit + ' = ' + equation.total + "</p>");
        }
        else if (equation.type == "Multiply") {
            $('#history').append("<p>" + equation.firstDigit + ' × ' +
                equation.secondDigit + ' = ' + equation.total + "</p>");
        }
    }
}

function resetInputs(){
    $('#firstNumber').val('');
    $('#secondNumber').val('');
}
