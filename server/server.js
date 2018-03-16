let express = require('express');
let app = express();
const PORT = process.env.PORT || 5000;
let bodyParser = require('body-parser');
const equationHistory = []; //array

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
    equationHistory.push(numbersSubmitted);
    res.sendStatus(200);
})

//APP.LISTEN
app.listen(PORT, () => {
    console.log("server is running on port: ", PORT);
})

function calculateTotal(operation){
    console.log(operation);
    if (operation.type == "Add"){
        let sum = parseInt(operation.firstDigit) + parseInt(operation.secondDigit)
        operation.total = sum;
        return sum;
    } 
    else if (operation.type == "Subtract") {
        let difference = parseInt(operation.firstDigit) - parseInt(operation.secondDigit)
        operation.total = difference;
        return difference;
    }
}