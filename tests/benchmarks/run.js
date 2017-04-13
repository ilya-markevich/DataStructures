'use strict';

const creator = require('./creator');

[]
  .concat(require('./linkedList/singly'))
  .concat(require('./linkedList/doubly'))
  .map(testInit => testInit(creator))
  .forEach((tests) => {
    tests.forEach(test => test.run());
    console.log('\n');
  });