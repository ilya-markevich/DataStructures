'use strict';

const defaultHashTableSize = 20;
const emptyMarker = 1;
const customHashTableSize = 10;

const key = 'test';
const value = 10;
const indexInArray = 18;

const key1WithTheSameHash = 'teft';
const key2WithTheSameHash = 'tezt';
const value1 = 11;
const value2 = 12;
const sameHash = 15;

const itemsCountBeforeFalseInsert = indexInArray + (defaultHashTableSize - indexInArray);

module.exports = {
  defaultHashTableSize,
  emptyMarker,
  customHashTableSize,
  key1WithTheSameHash,
  key2WithTheSameHash,
  value1,
  value2,
  sameHash,
  key,
  value,
  indexInArray,
  itemsCountBeforeFalseInsert
};