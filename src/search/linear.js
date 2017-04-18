'use strict';

const makeSearch = require('./makeSearch');

function linearSearch(array, value, { extract }) {
  let result = -1;

  for (let i = 0; i < array.length; i++) {
    const arrValue = extract(array[i]);

    if (arrValue === value) {
      result = i;
      break;
    }

    if (arrValue > value) {
      break;
    }
  }

  return result;
}

module.exports = (array, value, opts) => {
  return makeSearch(array, value, linearSearch, opts);
};