let express = require('express');
let app = express();
const PORT = process.env.PORT || 5000;
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));

app.post('/equation', (req, res) =>{
    console.log(req.body);
    let numbersSubmitted = req.body;
    res.sendStatus(200);
})

app.listen(PORT, () =>{
    console.log("server is running on port: ", PORT);
})