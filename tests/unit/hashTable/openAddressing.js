'use strict';

require('should');

const HashTable = require('../../../src/hashTable/openAddressing');
const testData = require('../data/hashTable/openAddressing');

describe('Hash table with open addressing', () => {
  describe('Initial State', () => {
    it('should create hash table with default size', () => {
      const { defaultHashTableSize, emptyMarker } = testData;
      const hashTable = new HashTable();

      hashTable.should.have.property('_size', defaultHashTableSize);
      hashTable._table.should.have.length(defaultHashTableSize);
      hashTable._emptyMarker.should.be.eql(emptyMarker);
    });

    it('should create hash table with custom size', () => {
      const { customHashTableSize, emptyMarker } = testData;
      const hashTable = new HashTable(customHashTableSize);

      hashTable.should.have.property('_size', customHashTableSize);
      hashTable._table.should.have.length(customHashTableSize);
      hashTable._emptyMarker.should.be.eql(emptyMarker);
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
      Boolean(hashTable._table[indexInArray + 1]).should.be.eql(true);
    });

    it('should set many items and correctly get false on overflow', () => {
      const { key, value, itemsCountBeforeFalseInsert } = testData;
      const hashTable = new HashTable();

      for (let i = 0; i < itemsCountBeforeFalseInsert; i++) {
        hashTable.set(key, value).should.be.eql(true);
      }

      hashTable.set(key, value).should.be.eql(false);
      hashTable._table.forEach(value => Boolean(value).should.be.eql(true));
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

    it('should get key1 item', () => {
      const { value1, key1WithTheSameHash } = testData;

      hashTable.get(key1WithTheSameHash).should.be.eql(value1);
    });

    it('should get key2 item', () => {
      const { value2, key2WithTheSameHash } = testData;

      hashTable.get(key2WithTheSameHash).should.be.eql(value2);
    });
  });

  describe('#remove', () => {
    let hashTable;

    beforeEach(() => {
      const { value1, value2, key1WithTheSameHash, key2WithTheSameHash } = testData;

      hashTable = new HashTable();

      hashTable.set(key1WithTheSameHash, value1);
      hashTable.set(key2WithTheSameHash, value2);
    });

    it('should remove item with key1', () => {
      const { key1WithTheSameHash, sameHash, emptyMarker } = testData;

      hashTable.remove(key1WithTheSameHash);
      hashTable._table[sameHash].should.be.eql(emptyMarker);
    });

    it('should remove item with key1', () => {
      const { key2WithTheSameHash, sameHash, emptyMarker } = testData;

      hashTable.remove(key2WithTheSameHash);
      hashTable._table[sameHash + 1].should.be.eql(emptyMarker);
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