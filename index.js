'use strict';

module.exports = {
  linkedLists: {
    SinglyLinkedList: require('./src/linkedList/singly'),
    DoublyLinkedList: require('./src/linkedList/doubly')
  },
  searches: require('./search'),
  sortings: {
    insertion: require('./src/sorting/insertion'),
    selection: require('./src/sorting/selection'),
    bubble: require('./src/sorting/bubble'),
    heap: require('./src/sorting/heap')
  },
  Stack: require('./src/stack'),
  Queue: require('./src/queue')
};