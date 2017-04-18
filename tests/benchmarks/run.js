'use strict';

/* eslint no-console: off */

const creator = require('./creator');

[]
  .concat(require('./linkedList/singly'))
  .concat(require('./linkedList/doubly'))
  .concat(require('./stack'))
  .concat(require('./queue'))
  .concat(require('./sorting/insertion'))
  .concat(require('./sorting/selection'))
  .concat(require('./sorting/bubble'))
  .concat(require('./sorting/heap'))
  .concat(require('./sorting/quick'))
  .concat(require('./sorting/merge'))
  .map(testInit => testInit(creator))
  .forEach((tests) => {
    tests.forEach(test => test.run());
    console.log('\n');
  });