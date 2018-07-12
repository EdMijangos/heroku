const prompt = require('prompt');

prompt.start();

prompt.get(['firstNumber', 'secondNumber'], function (err, result){
  var result = result.firstNumber * result.secondNumber;
  console.log('Command-line input received:');
  console.log(result);
});