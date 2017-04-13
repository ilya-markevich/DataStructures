'use strict';

/* eslint no-undef: off */
/* eslint no-unused-vars: off */
/* eslint no-magic-numbers: off */

const Stack = require('../../../src/stack');

const data = {
  Stack
};

function setup() {
  const stack = new this.data.Stack();
}

function setupWithArray() {
  const stack = new this.data.Stack([1, 3, 2, 8, 9, 0]);
}

function pushFn() {
  stack.push('test');
}

function popFn() {
  stack.pop();
}

function sortFn() {
  stack.sort();
}

function clearFn() {
  stack.clear();
}

function toArrayFn() {
  stack.toArray();
}

function teardown() {
  stack.clear();
}

module.exports = {
  data,
  setup,
  setupWithArray,
  pushFn,
  popFn,
  sortFn,
  clearFn,
  toArrayFn,
  teardown
};