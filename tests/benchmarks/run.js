'use strict';

const commonData = require('./data/common');

[]
  .concat(require('./linkedList/singly')(commonData))
  .concat(require('./linkedList/doubly')(commonData))
  .forEach((test) => {
    test.on('complete', commonData.onComplete).run();
  });