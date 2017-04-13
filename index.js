'use strict';

module.exports = {
  linkedLists: {
    SinglyLinkedList: require('./src/linkedList/singly'),
    DoublyLinkedList: require('./src/linkedList/doubly')
  },
  searches: require('./search'),
  sortings: require('./sorting'),
  Stack: require('./src/stack'),
  Queue: require('./src/queue')
};