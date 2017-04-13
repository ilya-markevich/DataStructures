'use strict';

const listData = require('../data/linkedList');

function add(createTest, listData) {
  return createTest({
    name: 'Doubly Linked List #add',
    data: {
      LinkedList: listData.data.DoublyLinkedList
    },
    setup: listData.setup,
    fn: listData.addFn,
    teardown: listData.teardown
  });
}

function addToTop(createTest, listData) {
  return createTest({
    name: 'Doubly Linked List #addToTop',
    data: {
      LinkedList: listData.data.DoublyLinkedList
    },
    setup: listData.setup,
    fn: listData.addToTopFn,
    teardown: listData.teardown
  });
}

function addBefore(createTest, listData) {
  return createTest({
    name: 'Doubly Linked List #addBefore',
    data: {
      LinkedList: listData.data.SinglyLinkedList
    },
    setup: listData.setupAddBeforeAndAfter,
    fn: listData.addBeforeFn,
    teardown: listData.teardown
  });
}

function addAfter(createTest, listData) {
  return createTest({
    name: 'Doubly Linked List #addAfter',
    data: {
      LinkedList: listData.data.SinglyLinkedList
    },
    setup: listData.setupAddBeforeAndAfter,
    fn: listData.addAfterFn,
    teardown: listData.teardown
  });
}

function toArray(createTest, listData) {
  return createTest({
    name: 'Doubly Linked List #toArray',
    data: {
      LinkedList: listData.data.SinglyLinkedList
    },
    setup: listData.setupAddBeforeAndAfter,
    fn: listData.toArrayFn,
    teardown: listData.teardown
  });
}

function copyTo(createTest, listData) {
  return createTest({
    name: 'Doubly Linked List #copyTo',
    data: {
      LinkedList: listData.data.SinglyLinkedList
    },
    setup: listData.setupWithArray,
    fn: listData.copyToFn,
    teardown: listData.teardown
  });
}

function update(createTest, listData) {
  return createTest({
    name: 'Doubly Linked List #update',
    data: {
      LinkedList: listData.data.SinglyLinkedList
    },
    setup: listData.setupWithArray,
    fn: listData.updateFn,
    teardown: listData.teardown
  });
}

function clear(createTest, listData) {
  return createTest({
    name: 'Doubly Linked List #clear',
    data: {
      LinkedList: listData.data.SinglyLinkedList
    },
    setup: listData.setupWithArray,
    fn: listData.clearFn,
    teardown: listData.teardown
  });
}

function contains(createTest, listData) {
  return createTest({
    name: 'Doubly Linked List #contains',
    data: {
      LinkedList: listData.data.SinglyLinkedList
    },
    setup: listData.setupWithArray,
    fn: listData.containsFn,
    teardown: listData.teardown
  });
}

function remove(createTest, listData) {
  return createTest({
    name: 'Doubly Linked List #remove',
    data: {
      LinkedList: listData.data.SinglyLinkedList
    },
    setup: listData.setupWithArray,
    fn: listData.removeFn,
    teardown: listData.teardown
  });
}

module.exports = (createTest) => {
  return [
    add(createTest, listData),
    addToTop(createTest, listData),
    addBefore(createTest, listData),
    addAfter(createTest, listData),
    toArray(createTest, listData),
    copyTo(createTest, listData),
    update(createTest, listData),
    clear(createTest, listData),
    contains(createTest, listData),
    remove(createTest, listData)
  ];
};