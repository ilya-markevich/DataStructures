'use strict';

const defaultComparator = require('./shared/defaultComparator');

function defaultValueExtractor(value) {
  return value;
}

module.exports = function (array, element, opts) {
  opts = opts || {};

  let valueExtractor = opts.valueExtractor || defaultValueExtractor;
  let result = -1;
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let searchedValue = valueExtractor(element);

  function calculateTargetIndex(minIndex, maxIndex, array, valueToFind) {
    let indexValue = (valueExtractor(array[maxIndex]) - valueExtractor(array[minIndex])) / (maxIndex - minIndex + 1);
    let index = Math.floor(valueToFind / indexValue);

    if (index === 0 || indexValue === 0) {
      return 0;
    } else {
      return index - 1;
    }
  }

  while (minIndex <= maxIndex) {
    let index = minIndex + calculateTargetIndex(minIndex, maxIndex, array, searchedValue);
    let compareResult = defaultComparator(valueExtractor(array[index]), searchedValue);

    if (compareResult === 0) {
      result = index;
      break;
    }

    if (compareResult > 0) {
      maxIndex = index - 1;
    } else {
      minIndex = index + 1;
    }
  }

  return result;
};