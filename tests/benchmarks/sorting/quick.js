'use strict';

const sortingData = require('../data/sorting');

function sort10(createTest, sortingData) {
  return createTest({
    name: 'Quick sort 10 elements',
    data: sortingData.dataQuick,
    setup: sortingData.setup,
    fn: sortingData.sort10Fn
  });
}

function sort100(createTest, sortingData) {
  return createTest({
    name: 'Quick sort 100 elements',
    data: sortingData.dataQuick,
    setup: sortingData.setup,
    fn: sortingData.sort100Fn
  });
}

function sort1000(createTest, sortingData) {
  return createTest({
    name: 'Quick sort 1000 elements',
    data: sortingData.dataQuick,
    setup: sortingData.setup,
    fn: sortingData.sort1000Fn
  });
}

function sort10000(createTest, sortingData) {
  return createTest({
    name: 'Quick sort 10000 elements',
    data: sortingData.dataQuick,
    setup: sortingData.setup,
    fn: sortingData.sort10000Fn
  });
}

function sort100000(createTest, sortingData) {
  return createTest({
    name: 'Quick sort 100000 elements',
    data: sortingData.dataQuick,
    setup: sortingData.setup,
    fn: sortingData.sort100000Fn
  });
}

module.exports = (createTest) => {
  return [
    sort10(createTest, sortingData),
    sort100(createTest, sortingData),
    sort1000(createTest, sortingData),
    sort10000(createTest, sortingData),
    sort100000(createTest, sortingData)
  ];
};