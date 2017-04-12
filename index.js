'use strict';

module.exports = {
  linkedLists: {
    SinglyLinkedList: require('./src/linked-list/singly'),
    DoublyLinkedList: require('./src/linked-list/doubly')
  },
  searches: require('./search'),
  sortings: require('./sorting'),
  Stack: require('./stack/stack'),
  Queue: require('./queue/queue')
};