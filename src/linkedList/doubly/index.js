'use strict';

const BaseLinkedList = require('../base');
const LinkedListItem = require('./item');
const LinkedListLimiter = require('./limiter');

class DoublyLinkedList extends BaseLinkedList {
  constructor(defaultValues) {
    super(LinkedListLimiter);

    this._endLimiter = new LinkedListLimiter(null, this._top);
    this._top.next = this._bottom;

    this._insertDefaultValues(defaultValues);
  }

  get _bottom() {
    return this._endLimiter;
  }

  addToTop(value) {
    const self = this;

    const top = self._top;
    const topNode = top.next;
    const newNode = new LinkedListItem(value, topNode, top);

    top.next = newNode;
    topNode.prev = newNode;

    return self;
  }

  add(value) {
    const self = this;
    const bottom = self._bottom;
    const newNode = new LinkedListItem(value, bottom, bottom.prev);

    bottom.prev.next = newNode;
    bottom.prev = newNode;

    return self;
  }

  addBefore(beforeValue, value) {
    const self = this;
    const node = self._findNode(beforeValue);

    if (node) {
      const newNode = new LinkedListItem(value, node, node.prev);

      node.prev.next = newNode;
      node.prev = newNode;
    }

    return self;
  }

  addAfter(afterValue, value) {
    const self = this;
    const node = self._findNode(afterValue);

    if (node) {
      const newNode = new LinkedListItem(value, node.next, node);

      node.next.prev = newNode;
      node.next = newNode;
    }

    return self;
  }

  remove(value) {
    const self = this;
    const node = self._findNode(value);

    if (node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }

    return self;
  }

  copyTo(linkedList) {
    let currentTop = linkedList._top;

    for (const node of this) {
      currentTop.next = new LinkedListItem(node.value, null, currentTop);
      currentTop = currentTop.next;
    }

    return linkedList;
  }

  sort(sortFunc) {
    const self = this;
    const newList = new DoublyLinkedList();
    const sortPredicate = sortFunc || BaseLinkedList.defaultSortFunction;

    for (const node of self) {
      let newListNode = newList._top;
      const bottom = newList._bottom;

      while (newListNode.next !== bottom) {
        if (sortPredicate(node.value, newListNode.next.value) < 0) {
          break;
        }

        newListNode = newListNode.next;
      }

      const newNode = new LinkedListItem(node.value, newListNode.next, newListNode);

      newListNode.next.prev = newNode;
      newListNode.next = newNode;
    }

    self.clear();
    return newList.copyTo(self);
  }

  clear() {
    const self = this;
    const top = self._top;
    const bottom = self._bottom;

    top.next = bottom;
    bottom.prev = top;

    return self;
  }

  _insertDefaultValues(values = []) {
    const self = this;
    const top = self._top;
    const bottom = self._bottom;

    const lastNode = values.reduce((prevNode, value) => {
      const newNode = new LinkedListItem(value, null, prevNode);

      prevNode.next = newNode;
      return newNode;
    }, top);

    bottom.prev = lastNode;
    lastNode.next = bottom;
  }
}

module.exports = DoublyLinkedList;