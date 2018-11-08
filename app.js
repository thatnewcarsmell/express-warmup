const express = require('express');
const app = express();

const data = require('./data.json')
const port = 3000;

// app.get('/mult', (req, res, next) => {
//     res.send('Welcome to multiplier incorporated, why arent you using google search to do this shit?')
//     next()
//     app.get('/mult/:operand1', (req, res, next) => {
//         var number1 = parseInt(req.params.operand1);
//         res.send('Enter another number, sucka!')
//         next()
//         app.get('/mult/:operand1/:operand2', (req, res, next) => {
//             var number2 = parseInt(req.params.operand1);
//             var result = number1 * number2;
//             res.send({result})
//         })
//     })
// })

app.get('/mult/:operand1/:operand2', (req, res, next) => {
    res.send("result: " + req.params.operand1 * req.params.operand2)
})

app.get('/divide/:operand1/:operand2', (req, res, next) => {
    res.send("result: " + req.params.operand1 / req.params.operand2)
})

app.listen(port)