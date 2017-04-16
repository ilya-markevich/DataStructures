'use strict';

const makeSort = require('./makeSort');
const swap = require('./helpers/swap');

function downToUp(array, { lowerBound, upperBound, compare }) {
  let newUpperBound = 0;
  let newIsSorted = true;

  for (let i = lowerBound; i < upperBound; i++) {
    if (compare(array[i], array[i + 1]) > 0) {
      swap(array, i, i + 1);

      newUpperBound = i;
      newIsSorted = false;
    }
  }

  return {
    newUpperBound,
    newIsSorted
  };
}

function upToDown(array, { lowerBound, upperBound, compare }) {
  let newLowerBound = array.length;
  let newIsSorted = true;

  for (let i = upperBound; i > lowerBound; i--) {
    if (compare(array[i], array[i - 1]) < 0) {
      swap(array, i, i - 1);

      newLowerBound = i;
      newIsSorted = false;
    }
  }

  return {
    newLowerBound,
    newIsSorted
  };
}

function bubbleSort(array, { compare }) {
  let isSorted = true;
  let isDownToUp = true;

  let lowerBound = 0;
  let upperBound = array.length - 1;

  const checkOpts = {
    compare
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
}

module.exports = (array, opts) => {
  return makeSort(array, bubbleSort, opts);
};