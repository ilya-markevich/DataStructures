'use strict';

require('should');
const _ = require('lodash');

const generateTests = require('./testGenerator');
const SinglyLinkedList = require('../../../linked-lists/singly/singly');

const data = _.cloneDeep(require('./data/lists-data.json'));

describe('Singly Linked List', () => {
    generateTests({
        name: 'Singly Linked List',
        data: data,
        LinkedListConstructor: SinglyLinkedList
    });
});