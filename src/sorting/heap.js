'use strict';

/* eslint no-magic-numbers: off */
/* eslint no-constant-condition: off */

const makeSort = require('./makeSort');
const swap = require('./helpers/swap');

function makeHeap(array, compare) {
  for (let i = 0; i < array.length; i++) {
    let index = i;

    while (index !== 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (compare(array[index], array[parentIndex]) <= 0) {
        break;
      }

      swap(array, index, parentIndex);
      index = parentIndex;
    }
  }
}

function sort(array, compare) {
  for (let i = array.length - 1; i >= 0; i--) {
    swap(array, i, 0);

    let index = 0;

    while (true) {
      let child1Index = (2 * index) + 1;
      let child2Index = (2 * index) + 2;
      let swapChildIndex;

      if (child1Index >= i) {
        child1Index = index;
      }

      if (child2Index >= i) {
        child2Index = index;
      }

      if (compare(array[index], array[child1Index]) >= 0 && compare(array[index], array[child2Index]) >= 0) {
        break;
      }

      if (compare(array[child1Index], array[child2Index]) > 0) {
        swapChildIndex = child1Index;
      } else {
        swapChildIndex = child2Index;
      }

      swap(array, index, swapChildIndex);
      index = swapChildIndex;
    }
  }
}

function heapSort(array, { compare }) {
  makeHeap(array, compare);
  sort(array, compare);

  return array;
}

module.exports = (array, opts) => {
  return makeSort(array, heapSort, opts);
};