'use strict';

const SinglyLinkedList = require('../linkedList/singly');

class Stack {
  constructor(defaultValues) {
    this._content = new SinglyLinkedList(defaultValues);
  }

  push(value) {
    const self = this;

    self._content.addToTop(value);
    return self;
  }

  pop() {
    const self = this;
    const top = self._content._top;
    const nodeToReturn = top.next;

    if (nodeToReturn) {
      top.next = nodeToReturn && nodeToReturn.next;
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

module.exports = Stack;