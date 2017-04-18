'use strict';

const extractor = require('./helpers/extractor');

module.exports = (array, value, searchFn, opts = {}) => {
  opts.extract = opts.extract || extractor;

  if (!Array.isArray(array)) {
    throw new Error('First parameter should be an array.');
  }

  return searchFn(array, opts.extract(value), opts);
};