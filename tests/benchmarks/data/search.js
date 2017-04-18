'use strict';

/* eslint no-undef: off */
/* eslint no-unused-vars: off */
/* eslint no-magic-numbers: off */

const linearSearch = require('../../../src/search/linear');
const binarySearch = require('../../../src/search/binary');
const interpolationSearch = require('../../../src/search/interpolation');

const linearData = {
  search: linearSearch
};
const binaryData = {
  search: binarySearch
};
const interpolationData = {
  search: interpolationSearch
};

function setup() {
  function generateArray(size) {
    const array = [];

    for (let i = 0; i < size; i++) {
      array.push(i);
    }

    return array;
  }

  const array10 = generateArray(10, true);
  const array100 = generateArray(100, true);
  const array1000 = generateArray(1000, true);
  const array10000 = generateArray(10000, true);
  const array100000 = generateArray(100000, true);
  const array1000000 = generateArray(1000000, true);
}

function searchIn10Fn() {
  this.data.search(array10, array10[7]);
}

function searchIn100Fn() {
  this.data.search(array100, array100[70]);
}

function searchIn1000Fn() {
  this.data.search(array1000, array1000[700]);
}

function searchIn10000Fn() {
  this.data.search(array10000, array10000[7000]);
}

function searchIn100000Fn() {
  this.data.search(array100000, array100000[70000]);
}

function searchIn1000000Fn() {
  this.data.search(array1000000, array1000000[700000]);
}

module.exports = {
  linearData,
  binaryData,
  interpolationData,
  setup,
  searchIn10Fn,
  searchIn100Fn,
  searchIn1000Fn,
  searchIn10000Fn,
  searchIn100000Fn,
  searchIn1000000Fn
};