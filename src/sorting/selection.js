'use strict';

const makeSort = require('./makeSort');
const swap = require('./helpers/swap');

function selectionSort(array, { compare }) {
  for (let i = 0; i < array.length; i++) {
    let minElementIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (compare(array[minElementIndex], array[j]) >= 0) {
        minElementIndex = j;
      }
    }

    swap(array, i, minElementIndex);
  }

  return array;
}

module.exports = (array, opts) => {
  return makeSort(array, selectionSort, opts);
};