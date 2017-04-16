'use strict';

/* eslint no-undef: off */
/* eslint no-unused-vars: off */
/* eslint no-magic-numbers: off */

const insertionSort = require('../../../src/sorting/insertion');
const selectionSort = require('../../../src/sorting/selection');
const bubbleSort = require('../../../src/sorting/bubble');
const heapSort = require('../../../src/sorting/heap');

const dataInsertion = {
  sort: insertionSort
};
const dataSelection = {
  sort: selectionSort
};
const dataBubble = {
  sort: bubbleSort
};
const dataHeap = {
  sort: heapSort
};

function setup() {
  function generateArray(size) {
    const array = [];
    const min = 0, max = 1000;

    for (let i = size - 1; i >= 0; i--) {
      array.push(Math.floor(Math.random() * (max - min)) + min);
    }

    return array;
  }

  const array10 = generateArray(10);
  const array100 = generateArray(100);
  const array1000 = generateArray(1000);
  const array10000 = generateArray(10000);
  const array100000 = generateArray(100000);
  const array1000000 = generateArray(1000000);
}

function sort10Fn() {
  this.data.sort(array10.slice(0));
}

function sort100Fn() {
  this.data.sort(array100.slice(0));
}

function sort1000Fn() {
  this.data.sort(array1000.slice(0));
}

function sort10000Fn() {
  this.data.sort(array10000.slice(0));
}

function sort100000Fn() {
  this.data.sort(array100000.slice(0));
}

function sort1000000Fn() {
  this.data.sort(array1000000.slice(0));
}

module.exports = {
  dataInsertion,
  dataSelection,
  dataBubble,
  dataHeap,
  setup,
  sort10Fn,
  sort100Fn,
  sort1000Fn,
  sort10000Fn,
  sort100000Fn,
  sort1000000Fn
};