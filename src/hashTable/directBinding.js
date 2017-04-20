'use strict';

/* eslint no-magic-numbers: off */
/* eslint no-bitwise: off */

const isEqual = require('lodash.isequal');

const BaseHashTable = require('./base');
const SinglyLinkedList = require('../linkedList/singly');

class DirectBinding extends BaseHashTable {
  constructor(size) {
    super(size);
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
        if (isEqual(record.value.key, key)) {
          return record.value.value;
        }
      }
    }
  }

  remove(key) {
    const self = this;
    const keyHash = self._makeHash(key);
    const value = self.get(key);

    if (value) {
      self._table[keyHash].remove(self._makeRecord(key, value));
    }
  }
}

module.exports = DirectBinding;