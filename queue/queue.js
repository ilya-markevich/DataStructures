'use strict';

const DoublyLinkedList = require('./doubly/doubly');

const queueSymbols = require('./symbols');
const _content = queueSymbols._content;
const _getContent = queueSymbols._getContent;

const linkedListSymbols = require('./shared/symbols');
const _getStartLimiter = linkedListSymbols._getStartLimiter;

class Queue {
  constructor(defaultValues) {
    this[_content] = new DoublyLinkedList(defaultValues);
  }

  enqueue(value) {
    this[_getContent]().add(value);
    return this;
  }

  dequeue() {
    const content = this[_getContent]();
    const startLimiter = content[_getStartLimiter]();
    const firsNode = startLimiter.next;

    if (firsNode.next) {
      firsNode.next.prev = startLimiter;
      startLimiter.next = firsNode.next;

      return firsNode.value;
    }

    return null;
  }

  sort(sortFunction) {
    this[_getContent]().sort(sortFunction);
    return this;
  }

  clear() {
    this[_getContent]().clear();
    return this;
  }

  toArray() {
    return this[_getContent]().toArray();
  }

  [_getContent]() {
    return this[_content];
  }
}

module.exports = Queue;