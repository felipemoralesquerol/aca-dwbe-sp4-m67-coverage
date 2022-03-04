const express = require('express');
const bodyParser = require('body-parser');
const adder = require('./services/adder');
const subtractor = require('./services/subtractor');
const multiplier = require('./services/multiplier');
const divider = require('./services/divider');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Test Coverage');
});

app.get('/add', function(req, res) {
  res.send(handleCalculatorRequest(adder.add, req.query.numberA,
      req.query.numberB));
});

app.get('/subtract', function(req, res) {
  res.send(handleCalculatorRequest(subtractor.subtract, req.query.numberA,
      req.query.numberB));
});

app.get('/multiply', function(req, res) {
  res.send(handleCalculatorRequest(multiplier.multiple, req.query.numberA,
      req.query.numberB));
});

app.get('/divide', function(req, res) {
  res.send(handleCalculatorRequest(divider.divide, req.query.numberA,
      req.query.numberB));
});

app.listen(3000);

module.exports = app;


// eslint-disable-next-line require-jsdoc
function handleCalculatorRequest(func, numberA, numberB) {
  numberA = parseInt(numberA);
  numberB = parseInt(numberB);

  // TODO: Cuidado con números mayores a 1000000
  if (numberB >= 1000000) {
      console.log('Test: Número muy grande')
  };


  const result = func(numberA, numberB);

  if (result) {
    return result.toString();
  }

  // eslint-disable-next-line no-throw-literal
  throw 'Calculation Error';
}
