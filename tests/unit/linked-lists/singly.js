'use strict';

require('should');
const _ = require('lodash');

const generateTests = require('./testGenerator');
const SinglyLinkedList = require('../../../index').SinglyLinkedList;

const data = _.cloneDeep(require('./../data/linked-list.json'));

describe('Singly Linked List', () => {
    generateTests({
        name: 'Singly Linked List',
        data: data,
        LinkedListConstructor: SinglyLinkedList
    });
});