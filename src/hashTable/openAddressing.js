'use strict';

const BaseHashTable = require('./base');
const isEqual = require('lodash.isequal');

class OpenAddressing extends BaseHashTable {
  constructor(size) {
    super(size);
    this._emptyMarker = 1;
  }

  set(key, value) {
    const self = this;
    const table = self._table;
    const keyHash = self._makeHash(key);

    for (const index of self._indexIteration(keyHash)) {
      if (self._isEmptyItem(index)) {
        table[index] = self._makeRecord(key, value);
        return true;
      }
    }

    return false;
  }

  get(key) {
    const self = this;
    const table = self._table;
    const keyHash = self._makeHash(key);

    for (const index of self._indexIteration(keyHash)) {
      const record = table[index];

      if (record) {
        if (isEqual(record.key, key)) {
          return record.value;
        }
      } else {
        return undefined;
      }
    }
  }

  remove(key) {
    const self = this;
    const table = self._table;
    const keyHash = self._makeHash(key);

    for (const index of self._indexIteration(keyHash)) {
      const record = table[index];

      if (record) {
        if (isEqual(record.key, key)) {
          table[index] = self._emptyMarker;
          break;
        }
      } else {
        break;
      }
    }
  }

  * _indexIteration(startIndex) {
    const self = this;

    yield startIndex;

    for (let i = self._getNextIndex(startIndex); Number.isInteger(i) && i !== startIndex; i = self._getNextIndex(i)) {
      yield i;
    }
  }

  _isEmptyItem(index) {
    const { _table, _emptyMarker } = this;

    return _table[index] === _emptyMarker || Boolean(_table[index]) === false;
  }

  _getNextIndex(index) {
    return (index + 1) % this._size;
  }
}

module.exports = OpenAddressing;