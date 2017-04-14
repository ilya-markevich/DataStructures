'use strict';

module.exports = {
  linkedLists: {
    SinglyLinkedList: require('./src/linkedList/singly'),
    DoublyLinkedList: require('./src/linkedList/doubly')
  },
  searches: require('./search'),
  sortings: {
    insertion: require('./src/sorting/insertion')
  },
  Stack: require('./src/stack'),
  Queue: require('./src/queue')
};