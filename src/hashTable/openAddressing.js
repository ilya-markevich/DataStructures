'use strict';

/* eslint no-magic-numbers: off */
/* eslint no-bitwise: off */

const isEqual = require('lodash.isequal');

class OpenAddressing {
  constructor(size) {
    const defaultSize = 20;

    this._size = size || defaultSize;
    this._table = new Array(this._size);
  }

  set(key, value) {
    const self = this;
    const table = self._table;
    const keyHash = self._makeHash(key);

    if (Boolean(table[keyHash]) === false) {
      table[keyHash] = self._makeRecord(key, value);
    }

    for (let i = self._getNextIndex(keyHash); i && i !== keyHash; i = self._getNextIndex(i)) {
      if (Boolean(table[i]) === false) {
        table[i] = self._makeRecord(key, value);
        return true;
      }
    }

    return false;
  }

  get(key) {
    const self = this;
    const table = self._table;
    const keyHash = self._makeHash(key);

    if (table[keyHash].key === key) {
      return table[keyHash].value;
    }

    for (let i = self._getNextIndex(keyHash); i && i !== keyHash; i = self._getNextIndex(i)) {
      const record = table[i];

      if (isEqual(record.key, key)) {
        return record.value;
      }
    }

    return undefined;
  }

  remove(key) {
    const self = this;
    const table = self._table;
    const keyHash = self._makeHash(key);

    if (table[keyHash].key === key) {
      table[keyHash] = 1; // set 1 for removed records
    }

    for (let i = self._getNextIndex(keyHash); i && i !== keyHash; i = self._getNextIndex(i)) {
      const record = table[i];

      if (isEqual(record.key, key)) {
        table[i] = 1;
      }
    }
  }

  contains(key) {
    return Boolean(this.get(key));
  }

  clear() {
    const self = this;

    for (let i = 0; i < self._size; i++) {
      self._table[i] = undefined;
    }
  }

  _getNextIndex(index) {
    return (index + 1) % this._size;
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

module.exports = OpenAddressing;