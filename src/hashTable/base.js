'use strict';

/* eslint no-magic-numbers: off */
/* eslint no-bitwise: off */

class BaseHashTable {
  constructor(size) {
    const defaultSize = 20;

    this._size = size || defaultSize;
    this._table = new Array(this._size);
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

module.exports = BaseHashTable;