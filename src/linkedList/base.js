'use strict';

const isEqual = require('lodash.isequal');

class BaseLinkedList {
  constructor(LinkedListLimiter) {
    this._startLimiter = new LinkedListLimiter();
    this.LimiterClass = LinkedListLimiter;
  }

  contains(value) {
    return Boolean(this._findNode(value));
  }

  update(oldValue, newValue) {
    const self = this;
    const nodeToUpdate = self._findNode(oldValue);

    if (nodeToUpdate) {
      nodeToUpdate.value = newValue;
    }

    return self;
  }

  toArray() {
    const result = [];

    for (const node of this) {
      result.push(node.value);
    }

    return result;
  }

  _findNode(value) {
    const self = this;

    for (const node of self) {
      if (!self._isLimiter(node) && isEqual(node.value, value)) {
        return node;
      }
    }

    return null;
  }

  _findNodeBefore(value) {
    const self = this;
    let node = self._top;

    while (node) {
      if (node.next && !self._isLimiter(node.next) && isEqual(value, node.next.value)) {
        break;
      }

      node = node.next;
    }

    return node;
  }

  _isLimiter(node) {
    return node instanceof this.LimiterClass;
  }

  get _top() {
    return this._startLimiter;
  }

  static defaultSortFunction(value1, value2) {
    return value1 - value2;
  }

  * [Symbol.iterator]() {
    const self = this;
    let node = self._top.next;

    while (node && !self._isLimiter(node)) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = BaseLinkedList;