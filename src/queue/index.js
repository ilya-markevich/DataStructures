'use strict';

const DoublyLinkedList = require('../linkedList/doubly');

class Queue {
  constructor(defaultValues) {
    this._content = new DoublyLinkedList(defaultValues);
  }

  enqueue(value) {
    const self = this;

    self._content.add(value);
    return self;
  }

  dequeue() {
    const self = this;
    const top = self._content._top;
    const nodeToReturn = top.next;

    if (nodeToReturn && nodeToReturn !== top) {
      nodeToReturn.prev.next = nodeToReturn.next;
      nodeToReturn.next.prev = nodeToReturn.prev;

      return nodeToReturn.value;
    }
  }

  sort(sortFunction) {
    const self = this;

    self._content.sort(sortFunction);
    return self;
  }

  clear() {
    const self = this;

    self._content.clear();
    return self;
  }

  toArray() {
    return this._content.toArray();
  }
}

module.exports = Queue;