let express = require('express');
let app = express();
const PORT = process.env.PORT || 5000;
let bodyParser = require('body-parser');
const equationHistory = []; //array
let outcome;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));

//GET
app.get('/equation', (req, res) => {
    res.send(equationHistory);
})

//POST
app.post('/equation', (req, res) => {
    // console.log(equationHistory);
    let numbersSubmitted = req.body;
    calculateTotal(numbersSubmitted);
    res.sendStatus(200);
})

//APP.LISTEN
app.listen(PORT, () => {
    console.log("server is running on port: ", PORT);
})

function calculateTotal(operation){
    console.log(operation);
    if (operation.type == "Add"){
        let sum = parseInt(operation.firstDigit) + parseInt(operation.secondDigit);
        operation.total = sum;
        let outcome = (operation.firstDigit + ' + ' + operation.secondDigit + ' = ' + operation.total);
        equationHistory.push(outcome)
    } 
    else if (operation.type == "Subtract") {
        let difference = parseInt(operation.firstDigit) - parseInt(operation.secondDigit);
        operation.total = difference;
        let outcome = (operation.firstDigit + ' + ' + operation.secondDigit + ' = ' + operation.total);
        equationHistory.push(outcome)
    }
    else if (operation.type == "Divide"){
        let quotient = parseInt(operation.firstDigit) / parseInt(operation.secondDigit);
        operation.total = quotient;
        let outcome = (operation.firstDigit + ' + ' + operation.secondDigit + ' = ' + operation.total);
        equationHistory.push(outcome)
    }
    else if (operation.type = "Multiply"){
        let product = parseInt(operation.firstDigit) * parseInt(operation.secondDigit);
        operation.total = product;
        let outcome = (operation.firstDigit + ' + ' + operation.secondDigit + ' = ' + operation.total);
        equationHistory.push(outcome)
    }
}