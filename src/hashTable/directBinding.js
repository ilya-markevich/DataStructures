'use strict';

/* eslint no-magic-numbers: off */
/* eslint no-bitwise: off */

const isEqual = require('lodash.isequal');
const SinglyLinkedList = require('../linkedList/singly');

class DirectBinding {
  constructor(size) {
    const defaultSize = 20;

    this._size = size || defaultSize;
    this._table = new Array(this._size);
  }

  set(key, value) {
    const self = this;
    const keyHash = self._makeHash(key);
    const record = self._makeRecord(key, value);

    if (!self._table[keyHash]) {
      self._table[keyHash] = new SinglyLinkedList();
    }

    self._table[keyHash].addToTop(record);
  }

  get(key) {
    const self = this;
    const keyHash = self._makeHash(key);
    const list = self._table[keyHash];

    if (list) {
      for (const record of list) {
        if (isEqual(record.key, key)) {
          return record.value;
        }
      }
    }
  }

  contains(key) {
    return Boolean(this.get(key));
  }

  _makeRecord(key, value) {
    return {
      key,
      value
    };
  }

  _makeHash(key) {
    const hashValue = String(key).split('').reduce((a, b) => {
      const k = ((a << 5) - a) + b.charCodeAt(0);

      return k & k;
    }, 0);

    return hashValue % this._size;
  }
}

module.exports = DirectBinding;