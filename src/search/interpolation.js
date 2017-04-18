'use strict';

const makeSearch = require('./makeSearch');

function interpolationSearch(array, value, { extract }) {
  let result = -1;
  let minIndex = 0;
  let maxIndex = array.length - 1;

  function calculateTargetIndex(minIndex, maxIndex, array, valueToFind) {
    const indexValue = (extract(array[maxIndex]) - extract(array[minIndex])) / (maxIndex - minIndex + 1);
    const index = Math.floor(valueToFind / indexValue);

    if (index === 0 || indexValue === 0) {
      return 0;
    } else {
      return index - 1;
    }
  }

  while (minIndex <= maxIndex) {
    const index = minIndex + calculateTargetIndex(minIndex, maxIndex, array, value);
    const indexValue = extract(array[index]);

    if (indexValue === value) {
      result = index;
      break;
    }

    if (indexValue > value) {
      maxIndex = index - 1;
    } else {
      minIndex = index + 1;
    }
  }

  return result;
}

module.exports = (array, value, opts) => {
  return makeSearch(array, value, interpolationSearch, opts);
};