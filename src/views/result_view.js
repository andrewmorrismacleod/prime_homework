const PubSub = require('../helpers/pub_sub.js')

const ResultView = function() {

};

ResultView.prototype.displayResult = function (result){
  const resultElement = document.querySelector('#result');
  if (result) {
    resultElement.textContent = `Yes, it's a prime number.`
  } else {
    console.log(result);
    resultElement.textContent = `No, it's not a prime number.`
  }

};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const isPrime = event.detail;
    this.displayResult(isPrime);
  });

}

module.exports = ResultView;
