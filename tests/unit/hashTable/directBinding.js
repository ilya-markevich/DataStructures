'use strict';

require('should');

const HashTable = require('../../../src/hashTable/directBinding');
const testData = require('../data/hashTable/directBinding');

describe('Hash table with direct binding', () => {
  describe('Initial State', () => {
    it('should create hash table with default size', () => {
      const { defaultHashTableSize } = testData;
      const hashTable = new HashTable();

      hashTable.should.have.property('_size', defaultHashTableSize);
      hashTable._table.should.have.length(defaultHashTableSize);
    });

    it('should create hash table with custom size', () => {
      const { customHashTableSize } = testData;
      const hashTable = new HashTable(customHashTableSize);

      hashTable.should.have.property('_size', customHashTableSize);
      hashTable._table.should.have.length(customHashTableSize);
    });
  });

  describe('#set', () => {
    it('should set new item', () => {
      const { key, value, indexInArray } = testData;
      const hashTable = new HashTable();

      hashTable.set(key, value);
      Boolean(hashTable._table[indexInArray]).should.be.eql(true);
    });

    it('should set two new items with the same key', () => {
      const { key, value, indexInArray } = testData;
      const numberOfSameItems = 2;
      const hashTable = new HashTable();

      for (let i = 0; i < numberOfSameItems; i++) {
        hashTable.set(key, value);
      }

      Boolean(hashTable._table[indexInArray]).should.be.eql(true);
      hashTable._table[indexInArray].toArray().should.have.length(numberOfSameItems);
    });
  });

  describe('#get', () => {
    let hashTable;

    before(() => {
      const { value1, value2, key1WithTheSameHash, key2WithTheSameHash } = testData;

      hashTable = new HashTable();

      hashTable.set(key1WithTheSameHash, value1);
      hashTable.set(key2WithTheSameHash, value2);
    });

    it('should get item for key1', () => {
      const { key1WithTheSameHash, value1 } = testData;

      hashTable.get(key1WithTheSameHash).should.be.eql(value1);
    });

    it('should get item for key2', () => {
      const { key2WithTheSameHash, value2 } = testData;

      hashTable.get(key2WithTheSameHash).should.be.eql(value2);
    });
  });

  describe('#remove', () => {
    let hashTable, insertedKey;

    before(() => {
      const { key, value } = testData;

      hashTable = new HashTable();
      insertedKey = key;

      hashTable.set(key, value);
    });

    it('should remove item', () => {
      const { indexInArray } = testData;

      hashTable.remove(insertedKey);
      hashTable._table[indexInArray].toArray().should.have.length(0);
    });

    it('should do nothing for fake item', () => {
      hashTable.remove(null);
    });
  });

  describe('#contains', () => {
    let hashTable, insertedKey;

    before(() => {
      const { key, value } = testData;

      hashTable = new HashTable();
      insertedKey = key;

      hashTable.set(key, value);
    });

    it('should return that hash table contains key', () => {
      hashTable.contains(insertedKey).should.be.eql(true);
    });

    it('should return that hash table doesn\'t contain key', () => {
      hashTable.contains(null).should.be.eql(false);
    });
  });

  describe('#clear', () => {
    let hashTable;

    before(() => {
      const { key, value } = testData;

      hashTable = new HashTable();
      hashTable.set(key, value);
    });

    it('should clear hash table', () => {
      hashTable.clear();

      for (let i = 0; i < hashTable._size; i++) {
        Boolean(hashTable._table[i]).should.be.eql(false);
      }
    });
  });
});