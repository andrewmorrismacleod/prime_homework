const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js')
const PrimeChecker = require('./models/prime_checker.js')

const PrimeCheckerUpdate = require('./models/prime_checker_amended.js')
const OptimusPrime = require('./models/optimus_prime.js')
const ResultViewTimerOpt = require('./views/result_view_optimus_prime.js')
const ResultViewTimer = require('./views/result_view_prime_checker.js')

document.addEventListener('DOMContentLoaded', () => {

  const formView = new FormView();
  formView.bindEvents();

  // const primeChecker = new PrimeChecker();
  // primeChecker.bindEvents();

  const optimusPrime = new OptimusPrime();
  optimusPrime.bindEvents();

  const primeCheckerUpdate = new PrimeCheckerUpdate();
  primeCheckerUpdate.bindEvents();

  const resultViewTimerOpt = new ResultViewTimerOpt();
  resultViewTimerOpt.bindEvents();

  const resultViewTimer = new ResultViewTimer();
  resultViewTimer.bindEvents();

});
