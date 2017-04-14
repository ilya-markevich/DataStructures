'use strict';

const extractor = require('./helpers/valueExtractor');
const compare = require('./helpers/comparator');

function swap(array, i) {
  const temp = array[i];

  array[i] = array[i + 1];
  array[i + 1] = temp;
}

function downToUp(array, { lowerBound, upperBound, valueExtractor }) {
  let newUpperBound = 0;
  let newIsSorted = true;

  for (let i = lowerBound; i < upperBound; i++) {
    if (compare(valueExtractor(array[i]), valueExtractor(array[i + 1])) > 0) {
      swap(array, i);

      newUpperBound = i;
      newIsSorted = false;
    }
  }

  return {
    newUpperBound,
    newIsSorted
  };
}

function upToDown(array, { lowerBound, upperBound, valueExtractor }) {
  let newLowerBound = array.length;
  let newIsSorted = true;

  for (let i = upperBound; i > lowerBound; i--) {
    if (compare(valueExtractor(array[i]), valueExtractor(array[i - 1])) < 0) {
      swap(array, i - 1);

      newLowerBound = i;
      newIsSorted = false;
    }
  }

  return {
    newLowerBound,
    newIsSorted
  };
}

module.exports = (array, opts = {}) => {
  const valueExtractor = opts.valueExtractor || extractor;

  if (!Array.isArray(array)) {
    throw new Error('First parameter should be an array.');
  }

  let isSorted = true;
  let isDownToUp = true;

  let lowerBound = 0;
  let upperBound = array.length - 1;

  const checkOpts = {
    valueExtractor
  };

  do {
    checkOpts.lowerBound = lowerBound;
    checkOpts.upperBound = upperBound;

    if (isDownToUp) {
      const { newIsSorted, newUpperBound } = downToUp(array, checkOpts);

      upperBound = newUpperBound;
      isSorted = newIsSorted;
    } else {
      const { newIsSorted, newLowerBound } = upToDown(array, checkOpts);

      lowerBound = newLowerBound;
      isSorted = newIsSorted;
    }

    isDownToUp = !isDownToUp;
  } while (!isSorted);

  return array;
};