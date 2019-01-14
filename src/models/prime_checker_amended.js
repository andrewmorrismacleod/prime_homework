const PubSub = require('../helpers/pub_sub.js')

const PrimeCheckerUpdate = function () {

};

PrimeCheckerUpdate.prototype.bindEvents = function() {

  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    let start = Date.now();
    const isPrime = this.numberIsPrime(inputtedNumber);
    let time_taken = Date.now() - start;
    return_object = {

      primality: isPrime,
      runtime: time_taken
    }
    PubSub.publish('PrimeTime:result-calculated', return_object)
  });

}



PrimeCheckerUpdate.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};


module.exports = PrimeCheckerUpdate;
