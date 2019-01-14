const PubSub = require('../helpers/pub_sub.js')

const OptimusPrime = function () {

};

OptimusPrime.prototype.bindEvents = function() {

  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    let start = Date.now();
    const isPrime = this.numberIsPrime(inputtedNumber);
    let time_taken = (Date.now() - start);
    return_object = {
      primality: isPrime,
      runtime: time_taken
    }
    PubSub.publish('OptPrimeTime:result-calculated', return_object)
  });

}

OptimusPrime.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false; //Number is either 1 or 0 which aren't primes
  } else if (number < 4){
    return true; //Number is either 2 or 3, both of which are prime
  } else if (number % 2 === 0) {
    return false; //Any number divisible by 2 isn't a prime
  } else if (number < 9) {
    return true; //At this point the number is either 5 or 7, both of which are prime.
  } else if (number % 3 === 0) {
    return false; //Any number divisible by 3 isn't prime
  } else {
    //Prime numbers are always of the form 6n plus or minus 1
    //For any number n, there is only one prime factor greater than sqrt(n) and that is n itself
    //Using these two facts and the fact that we have already checked for divisibility by 2 and 3 we can
    //improve the loop defined in prime_checker by

    //Only checking divisibility of numbers up to sqrt(n)
    //Only checking for prime factors of the form 6n+-1
    //Note: not all numbers of the form 6n+-1 are prime but a prime is always of the form 6n+-1

    for (var i = 6; i <= Math.floor(Math.sqrt(number)); i += 6) {
      if ((number % (i-1) === 0)|| (number % (i+1) === 0)){
        return false;
      }
    }
    return true;
  }
};

module.exports = OptimusPrime;
