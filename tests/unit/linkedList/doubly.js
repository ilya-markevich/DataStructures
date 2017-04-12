'use strict';

require('should');

const DoublyLinkedList = require('../../../src/linkedList/doubly');

const generateTests = require('./testGenerator');
const data = require('../data/linkedList/doubly.js');

describe('Doubly Linked List', () => {
  generateTests({
    data,
    LinkedListConstructor: DoublyLinkedList
  });
});