'use strict';

/* eslint "no-magic-numbers": off */

const defaultValues = [1, 2, 3, 4];
const valuesToAdd = [
  10,
  true,
  {
    name: 'Test'
  },
  'test'
];

const valuesToDefaultSorting = [5, 2, 9, 15, 4];
const valuesToDefaultSortingAfterSort = [2, 4, 5, 9, 15];

const valuesToCustomSorting = [
  {
    age: 10
  },
  {
    age: 5
  },
  {
    age: 15
  },
  {
    age: 12
  }
];
const valuesToCustomSortingAfterSort = [
  {
    age: 5
  },
  {
    age: 10
  },
  {
    age: 12
  },
  {
    age: 15
  }
];

function customSortFunction(value1, value2) {
  return value1.age - value2.age;
}

const updatedValue = 'updateTest';

module.exports = {
  defaultValues,
  valuesToAdd,
  valuesToDefaultSorting,
  valuesToDefaultSortingAfterSort,
  valuesToCustomSorting,
  valuesToCustomSortingAfterSort,
  customSortFunction,
  updatedValue
};