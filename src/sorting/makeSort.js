'use strict';

const comparator = require('./helpers/comparator');

module.exports = (array, sortFn, opts = {}) => {
  opts.compare = opts.compare || comparator;

  if (!Array.isArray(array)) {
    throw new Error('First parameter should be an array.');
  }

  sortFn(array, opts);
  return array;
};