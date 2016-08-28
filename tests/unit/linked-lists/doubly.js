'use strict';

require('should');
const _ = require('lodash');

const generateTests = require('./testGenerator');
const DoublyLinkedList = require('../../../linked-lists/doubly/doubly');

const data = _.cloneDeep(require('./data/singly.json'));

describe('Doubly Linked List', () => {
    generateTests({
        name: 'Doubly Linked List',
        data: data,
        LinkedListConstructor: DoublyLinkedList
    });
});