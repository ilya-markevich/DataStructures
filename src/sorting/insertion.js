'use strict';

const makeSort = require('./makeSort');
const shift = require('./helpers/shift');

function insertionSort(array, { compare }) {
  for (let i = 0; i < array.length; i++) {
    let newPosition = i;

    for (let j = 0; j < i; j++) {
      if (compare(array[i], array[j]) < 0) {
        newPosition = j;
        break;
      }
    }

    shift(array, i, newPosition);
  }

  return array;
}

module.exports = (array, opts) => {
  return makeSort(array, insertionSort, opts);
};