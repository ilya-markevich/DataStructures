'use strict';

module.exports = {
  linkedLists: {
    SinglyLinkedList: require('./src/linkedList/singly'),
    DoublyLinkedList: require('./src/linkedList/doubly')
  },
  searches: {
    linear: require('./src/search/linear'),
    binary: require('./src/search/binary'),
    interpolation: require('./src/search/interpolation')
  },
  sortings: {
    insertion: require('./src/sorting/insertion'),
    selection: require('./src/sorting/selection'),
    bubble: require('./src/sorting/bubble'),
    heap: require('./src/sorting/heap'),
    quick: require('./src/sorting/quick'),
    merge: require('./src/sorting/merge')
  },
  Stack: require('./src/stack'),
  Queue: require('./src/queue')
};