'use strict';

/* eslint no-undef: off */
/* eslint no-unused-vars: off */
/* eslint no-magic-numbers: off */

const insertionSort = require('../../../src/sorting/insertion');

const dataInsertion = {
  sort: insertionSort
};

function setup() {
  function generateArray(size) {
    const array = [];

    for (let i = size - 1; i >= 0; i--) {
      array.push(i);
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
  this.data.sort(array10);
}

function sort100Fn() {
  this.data.sort(array100);
}

function sort1000Fn() {
  this.data.sort(array1000);
}

function sort10000Fn() {
  this.data.sort(array10000);
}

function sort100000Fn() {
  this.data.sort(array100000);
}

function sort1000000Fn() {
  this.data.sort(array1000000);
}

module.exports = {
  dataInsertion,
  setup,
  sort10Fn,
  sort100Fn,
  sort1000Fn,
  sort10000Fn,
  sort100000Fn,
  sort1000000Fn
};