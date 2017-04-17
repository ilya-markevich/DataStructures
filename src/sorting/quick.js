'use strict';

/* eslint no-magic-numbers: off */
/* eslint no-constant-condition: off */

const makeSort = require('./makeSort');
const swap = require('./helpers/swap');

function selectDelimiterIndex(min, max) {
  return Math.round((min + max) / 2);
}

function moveElementsWithDelimiter(array, delimiterIndex, startIndex, endIndex, compare) {
  swap(array, delimiterIndex, startIndex);

  const delimiter = array[startIndex];
  let indexHigh = endIndex;
  let indexLow = startIndex;

  while (true) {
    while (compare(array[indexHigh], delimiter) >= 0 && indexHigh > indexLow) {
      indexHigh--;
    }

    if (indexHigh <= indexLow) {
      array[indexLow] = delimiter;
      break;
    }

    array[indexLow] = array[indexHigh];
    indexLow += 1;

    while (compare(array[indexLow], delimiter) < 0 && indexHigh > indexLow) {
      indexLow++;
    }

    if (indexHigh <= indexLow) {
      array[indexHigh] = delimiter;
      break;
    }

    array[indexHigh] = array[indexLow];
  }

  return indexLow;
}

function quickSort(array, startIndex, endIndex, compare) {
  if (startIndex >= endIndex) {
    return;
  }

  let delimiterIndex = selectDelimiterIndex(startIndex, endIndex);

  delimiterIndex = moveElementsWithDelimiter(array, delimiterIndex, startIndex, endIndex, compare);

  quickSort(array, startIndex, delimiterIndex - 1, compare);
  quickSort(array, delimiterIndex + 1, endIndex, compare);
}

function quickSortMain(array, { compare }) {
  quickSort(array, 0, array.length - 1, compare);
  return array;
}

module.exports = (array, opts) => {
  return makeSort(array, quickSortMain, opts);
};