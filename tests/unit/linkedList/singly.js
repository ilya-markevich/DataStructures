'use strict';

require('should');

const SinglyLinkedList = require('../../../src/linkedList/singly');

const generateTests = require('./testGenerator');
const data = require('../data/linkedList/singly.js');

describe('Singly Linked List', () => {
  generateTests({
    data,
    LinkedListConstructor: SinglyLinkedList
  });
});