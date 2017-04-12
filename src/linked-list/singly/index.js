'use strict';

const BaseLinkedList = require('../base');
const LinkedListItem = require('./item');

class SinglyLinkedList extends BaseLinkedList {
  constructor(defaultValues) {
    super(LinkedListItem);

    this._insertDefaultValues(defaultValues);
  }

  addToTop(value) {
    const self = this;
    const top = self._top;

    top.next = new LinkedListItem(value, top.next);

    return self;
  }

  add(value) {
    const self = this;
    let node = self._top;

    while (node.next) {
      node = node.next;
    }

    node.next = new LinkedListItem(value);
    return self;
  }

  addBefore(beforeValue, value) {
    const self = this;
    const beforeNode = self._findNodeBefore(beforeValue);

    if (beforeNode) {
      beforeNode.next = new LinkedListItem(value, beforeNode.next);
    }

    return self;
  }

  addAfter(afterValue, value) {
    const self = this;
    const afterNode = self._findNode(afterValue);

    if (afterNode) {
      afterNode.next = new LinkedListItem(value, afterNode.next);
    }

    return self;
  }

  remove(value) {
    const self = this;
    const beforeNodeToRemove = self._findNodeBefore(value);

    if (beforeNodeToRemove) {
      beforeNodeToRemove.next = beforeNodeToRemove.next.next;
    }

    return self;
  }

  copyTo(linkedList) {
    let currentTop = linkedList._top;

    for (const node of this) {
      currentTop.next = new LinkedListItem(node.value);
      currentTop = currentTop.next;
    }

    return linkedList;
  }

  sort(sortFunc) {
    const self = this;
    const sortPredicate = sortFunc || BaseLinkedList.defaultSortFunction;
    const newList = new SinglyLinkedList();

    for (const node of self) {
      let newListNode = newList._top;

      for (newListNode of newList) {
        if (sortPredicate(node.value, newListNode.value) < 0) {
          break;
        }
      }

      newListNode.next = new LinkedListItem(node.value, newListNode.next);
    }

    self.clear();
    return newList.copyTo(self);
  }

  clear() {
    const self = this;
    const top = self._top;

    top.next = null;
    return self;
  }

  _insertDefaultValues(values = []) {
    const limiter = this._top;

    values.reduce((prevNode, value) => {
      const newNode = new LinkedListItem(value);

      prevNode.next = newNode;
      return newNode;
    }, limiter);
  }
}

module.exports = SinglyLinkedList;