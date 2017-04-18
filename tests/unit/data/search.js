'use strict';

/* eslint no-magic-numbers: off */

const emptyArray = [];
const smallArray = [0];

const integers = [1, 2, 5, 8, 12, 22, 25];
const intIndexToSearch = 4;
const notExistedIntValue = 9;

const objects = [
  {
    age: 2
  },
  {
    age: 7
  },
  {
    age: 17
  },
  {
    age: 22
  },
  {
    age: 25
  },
  {
    age: 44
  }
];
const objIndexToSearch = 2;
const notExistedObjValue = {
  age: 9
};

function objExtractor(value) {
  return value.age;
}

module.exports = {
  emptyArray,
  smallArray,
  integers,
  intIndexToSearch,
  notExistedIntValue,
  objects,
  objIndexToSearch,
  notExistedObjValue,
  objExtractor
};