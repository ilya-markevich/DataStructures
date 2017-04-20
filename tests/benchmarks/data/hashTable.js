'use strict';

/* eslint no-undef: off */
/* eslint no-unused-vars: off */
/* eslint no-magic-numbers: off */

const directBinding = require('../../../src/hashTable/directBinding');
const openAddressing = require('../../../src/hashTable/openAddressing');

const dataDirectBinding = {
  HashTable: directBinding
};
const dataOpenAddressing = {
  HashTable: openAddressing
};

function setup() {
  const itemsCount = 1000000;
  const hashTable = new this.data.HashTable(itemsCount);

  for (let i = 0; i < itemsCount; i++) {
    hashTable.set(i, i);
  }
}

function setupWithTheSameKey() {
  const itemsCount = 1000000;
  const hashTable = new this.data.HashTable(itemsCount);

  for (let i = 0; i < itemsCount; i++) {
    hashTable.set(3000, 3000);
  }
}

function setupEmpty() {
  const itemsCount = 1000000;
  const hashTable = new this.data.HashTable(itemsCount);
}

function getFn() {
  hashTable.get(500000);
}

function setFn() {
  hashTable.set(500000);
}

function removeFn() {
  hashTable.remove(3000);
}

function clearFn() {
  hashTable.clear();
}

function containsFn() {
  hashTable.contains(5000);
}

module.exports = {
  dataDirectBinding,
  dataOpenAddressing,
  setup,
  setupEmpty,
  setupWithTheSameKey,
  getFn,
  setFn,
  clearFn,
  containsFn,
  removeFn
};