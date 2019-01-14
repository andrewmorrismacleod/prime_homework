const PubSub = require('../helpers/pub_sub.js')

const ResultViewTimerOpt = function() {

};

ResultViewTimerOpt.prototype.displayResult = function (result_object){
  const resultElement = document.querySelector('#result');
  if (result_object['primality']) {
    resultElement.textContent = `Yes, it's a prime number. Optimus Prime took ${result_object['runtime']}ms to determine this`
  } else {
    resultElement.textContent = `No, it's not a prime number. Optimus Prime took ${result_object['runtime']}ms to determine this`
  }

};

ResultViewTimerOpt.prototype.bindEvents = function() {
  PubSub.subscribe('OptPrimeTime:result-calculated', (event) => {
    const isPrime = event.detail;
    this.displayResult(isPrime);
  });

}

module.exports = ResultViewTimerOpt;
