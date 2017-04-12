'use strict';

const SinglyLinkedList = require('../../../src/linkedList/singly');
const DoublyLinkedList = require('../../../src/linkedList/doubly');

const data = {
  SinglyLinkedList,
  DoublyLinkedList
};

function setup() {
  this.list = new this.data.LinkedList();
}

function teardown() {
  this.list.clear();
}

module.exports = {
  data,
  setup,
  teardown
};