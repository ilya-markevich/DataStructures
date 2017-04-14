'use strict';

const extractor = require('./helpers/valueExtractor');
const compare = require('./helpers/comparator');
const replace = require('./helpers/replaceElements');

module.exports = (array, opts = {}) => {
  const valueExtractor = opts.valueExtractor || extractor;

  if (!Array.isArray(array)) {
    throw new Error('First parameter should be an array.');
  }

  for (let i = 0; i < array.length; i++) {
    const element = valueExtractor(array[i]);
    let newPosition = i;

    for (let j = 0; j < i; j++) {
      if (compare(element, valueExtractor(array[j])) < 0) {
        newPosition = j;
        break;
      }
    }

    replace(array, i, newPosition);
  }

  return array;
};