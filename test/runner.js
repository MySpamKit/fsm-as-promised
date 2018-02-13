/* global defaultPromise */
/* global global */
var expect = require('chai').expect;

var init = require('./specs/init');
var basic = require('./specs/basic');
var advanced = require('./specs/advanced');
var transition = require('./specs/transition');
var errorHandling = require('./specs/error-handling');
var transitionLifecycle = require('./specs/transition-lifecycle');
var returnValue = require('./specs/return-value');
var conditionalTransition =  require('./specs/conditional-transition');
var final =  require('./specs/final');
var callbackPrefix = require('./specs/callback-prefix');
var emitter = require('./specs/emitter');
var transitionId = require('./specs/transition-id');
var faultyFsm = require('./specs/faulty-fsm');
var errorIsolation = require('./specs/error-isolation');

var promises = {
  Default: defaultPromise,
  bluebird: require('bluebird'),
  ES6Shim: require('es6-shim').Promise,
  lie: require('lie'),
  npo: require('native-promise-only'),
  pinkie: require('pinkie'),
  promise: require('promise'),
  Q: require('q').Promise,
  RSVP: require('rsvp').Promise,
  when: require('when').promise
};

Object.keys(promises).forEach(function (promise) {
  describe('Promise library: ' + promise, function () {
    init(promises[promise]);
    basic(promises[promise]);
    advanced(promises[promise]);
    transition(promises[promise]);
    errorHandling(promises[promise]);
    transitionLifecycle(promises[promise]);
    returnValue(promises[promise]);
    conditionalTransition(promises[promise]);
    final(promises[promise]);
    callbackPrefix(promises[promise]);
    emitter(promises[promise]);
    transitionId(promises[promise]);
    faultyFsm(promises[promise]);
    errorIsolation(promises[promise]);
  });
});
