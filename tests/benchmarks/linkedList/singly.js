'use strict';

const Benchmark = require('benchmark');
const listData = require('../data/linkedList');

function add(commonData, listData) {
  return new Benchmark({
    name: 'Singly Linked List #add',
    data: {
      LinkedList: listData.data.SinglyLinkedList
    },
    maxTime: commonData.maxTime,
    setup: listData.setup,
    fn() {
      this.list.add('test');
    },
    teardown: listData.teardown
  });
}

module.exports = (commonData) => {
  return [
    add(commonData, listData)
  ];
};