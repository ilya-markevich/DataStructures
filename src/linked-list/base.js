'use strict';

const isEqual = require('lodash.isequal');

class BaseLinkedList {
  constructor(LinkedListItem) {
    this._startLimiter = new LinkedListItem();
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
    for (const node of this) {
      if (isEqual(node.value, value)) {
        return node;
      }
    }

    return null;
  }

  _findNodeBefore(value) {
    for (const node of this) {
      if (node.next && isEqual(value, node.next.value)) {
        return node;
      }
    }

    return null;
  }

  get _top() {
    return this._startLimiter;
  }

  static defaultSortFunction(value1, value2) {
    return value1 - value2;
  }

  * [Symbol.iterator]() {
    let node = this._top.next;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = BaseLinkedList;