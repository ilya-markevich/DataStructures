'use strict';

/* eslint no-magic-numbers: off */
/* eslint func-style: off */

const integers = [1, 12, 4, 2, 8, 1, 5];
const integersSorted = [1, 1, 2, 4, 5, 8, 12];

const objects = [
  {
    age: 2
  },
  {
    age: 5
  },
  {
    age: 4
  },
  {
    age: 8
  },
  {
    age: 2
  },
  {
    age: 1
  },
  {
    age: 3
  }
];
const objectsSorted = [
  {
    age: 1
  },
  {
    age: 2
  },
  {
    age: 2
  },
  {
    age: 3
  },
  {
    age: 4
  },
  {
    age: 5
  },
  {
    age: 8
  }
];

const objectValueExtractor = value => value.age;

module.exports = {
  integers,
  integersSorted,
  objects,
  objectsSorted,
  objectValueExtractor
};