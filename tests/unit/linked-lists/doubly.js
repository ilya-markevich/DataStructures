'use strict';

require('should');
const _ = require('lodash');

const generateTests = require('./testGenerator');
const DoublyLinkedList = require('../../../index').DoublyLinkedList;

const data = _.cloneDeep(require('./../data/linked-list.json'));

describe('Doubly Linked List', () => {
    generateTests({
        name: 'Doubly Linked List',
        data: data,
        LinkedListConstructor: DoublyLinkedList
    });
});