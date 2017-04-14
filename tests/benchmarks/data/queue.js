'use strict';

/* eslint no-undef: off */
/* eslint no-unused-vars: off */
/* eslint no-magic-numbers: off */

const Queue = require('../../../src/queue');

const data = {
  Queue
};

function setup() {
  const queue = new this.data.Queue();
}

function setupWithArray() {
  const queue = new this.data.Queue([1, 3, 2, 8, 9, 0]);
}

function enqueueFn() {
  queue.enqueue('test');
}

function dequeueFn() {
  queue.dequeue();
}

function sortFn() {
  queue.sort();
}

function clearFn() {
  queue.clear();
}

function toArrayFn() {
  queue.toArray();
}

function teardown() {
  queue.clear();
}

module.exports = {
  data,
  setup,
  setupWithArray,
  enqueueFn,
  dequeueFn,
  sortFn,
  clearFn,
  toArrayFn,
  teardown
};