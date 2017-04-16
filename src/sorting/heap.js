'use strict';

/* eslint no-magic-numbers: off */
/* eslint no-constant-condition: off */

const extractor = require('./helpers/valueExtractor');

function makeHeap(array, valueExtractor) {
  for (let i = 0; i < array.length; i++) {
    let index = i;

    while (index !== 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (valueExtractor(array[index]) <= valueExtractor(array[parentIndex])) {
        break;
      }

      const temp = array[index];

      array[index] = array[parentIndex];
      array[parentIndex] = temp;

      index = parentIndex;
    }
  }
}

function sort(array, valueExtractor) {
  for (let i = array.length - 1; i >= 0; i--) {
    const temp = array[i];

    array[i] = array[0];
    array[0] = temp;

    let index = 0;

    while (true) {
      let child1 = (2 * index) + 1;
      let child2 = (2 * index) + 2;
      let swapChildIndex;

      if (child1 >= i) {
        child1 = index;
      }

      if (child2 >= i) {
        child2 = index;
      }

      if (valueExtractor(array[index]) >= valueExtractor(array[child1]) && valueExtractor(array[index]) >= valueExtractor(array[child2])) {
        break;
      }

      if (valueExtractor(array[child1]) > valueExtractor(array[child2])) {
        swapChildIndex = child1;
      } else {
        swapChildIndex = child2;
      }

      const temp = array[index];

      array[index] = array[swapChildIndex];
      array[swapChildIndex] = temp;

      index = swapChildIndex;
    }
  }
}

module.exports = (array, opts = {}) => {
  const valueExtractor = opts.valueExtractor || extractor;

  if (!Array.isArray(array)) {
    throw new Error('First parameter should be an array.');
  }

  makeHeap(array, valueExtractor);
  sort(array, valueExtractor);

  return array;
};