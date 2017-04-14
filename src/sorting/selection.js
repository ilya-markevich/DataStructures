'use strict';

const extractor = require('./helpers/valueExtractor');
const compare = require('./helpers/comparator');

module.exports = (array, opts = {}) => {
  const valueExtractor = opts.valueExtractor || extractor;

  if (!Array.isArray(array)) {
    throw new Error('First parameter should be an array.');
  }

  for (let i = 0; i < array.length; i++) {
    let minElementIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (compare(valueExtractor(array[minElementIndex]), valueExtractor(array[j])) >= 0) {
        minElementIndex = j;
      }
    }

    const temp = array[i];

    array[i] = array[minElementIndex];
    array[minElementIndex] = temp;
  }

  return array;
};