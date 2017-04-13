'use strict';

/* eslint no-undef: off */
/* eslint no-unused-vars: off */
/* eslint no-magic-numbers: off */

const SinglyLinkedList = require('../../../src/linkedList/singly');
const DoublyLinkedList = require('../../../src/linkedList/doubly');

const data = {
  SinglyLinkedList,
  DoublyLinkedList
};

function addFn() {
  list.add('test');
}

function addToTopFn() {
  list.addToTop('test');
}

function addBeforeFn() {
  list.addBefore('test');
}

function addAfterFn() {
  list.addAfter('test');
}

function toArrayFn() {
  list.toArray();
}

function copyToFn() {
  list.copyTo(new this.data.LinkedList());
}

function updateFn() {
  list.update(5);
}

function clearFn() {
  list.clear();
}

function containsFn() {
  list.contains(7);
}

function removeFn() {
  list.remove('test');
}

function setup() {
  const list = new this.data.LinkedList();
}

function setupAddBeforeAndAfter() {
  const list = new this.data.LinkedList();

  list.add('test');
}

function setupWithArray() {
  const list = new this.data.LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}

function teardown() {
  list.clear();
}

module.exports = {
  data,
  setup,
  teardown,
  setupAddBeforeAndAfter,
  setupWithArray,
  addFn,
  addToTopFn,
  addBeforeFn,
  addAfterFn,
  toArrayFn,
  copyToFn,
  updateFn,
  clearFn,
  containsFn,
  removeFn
};