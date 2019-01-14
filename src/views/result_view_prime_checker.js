const PubSub = require('../helpers/pub_sub.js')

const ResultViewTimer = function() {

};

ResultViewTimer.prototype.displayResult = function (result_object){
  const resultElement = document.querySelector('#result-prime-checker-update');
  if (result_object['primality']) {
    resultElement.textContent = `Yes, it's a prime number. Prime Checker took ${result_object['runtime']}ms to determine this`
  } else {
    resultElement.textContent = `No, it's not a prime number. Prime Checker took ${result_object['runtime']}ms to determine this`
  }

};

ResultViewTimer.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeTime:result-calculated', (event) => {
    const isPrime = event.detail;
    this.displayResult(isPrime);
  });

}

module.exports = ResultViewTimer;
