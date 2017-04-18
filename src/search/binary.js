'use strict';

/* eslint no-magic-numbers: off */

const makeSearch = require('./makeSearch');

function binarySearch(array, value, { extract }) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let result = -1;

  while (minIndex <= maxIndex) {
    const midIndex = parseInt((maxIndex + minIndex) / 2, 10);
    const midIndexValue = extract(array[midIndex]);

    if (midIndexValue === value) {
      result = midIndex;
      break;
    }

    if (midIndexValue > value) {
      maxIndex = midIndex - 1;
    } else {
      minIndex = midIndex + 1;
    }
  }

  return result;
}

module.exports = (array, value, opts) => {
  return makeSearch(array, value, binarySearch, opts);
};