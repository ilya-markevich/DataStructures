'use strict';

const hashTableData = require('../data/hashTable');

function set(createTest, hashTableData) {
  return createTest({
    name: 'Hash table with open addressing #set',
    data: hashTableData.dataOpenAddressing,
    setup: hashTableData.setupEmpty,
    fn: hashTableData.setFn
  });
}

function get(createTest, hashTableData) {
  return createTest({
    name: 'Hash table with open addressing #get',
    data: hashTableData.dataOpenAddressing,
    setup: hashTableData.setup,
    fn: hashTableData.getFn
  });
}

function remove(createTest, hashTableData) {
  return createTest({
    name: 'Hash table with open addressing #remove',
    data: hashTableData.dataOpenAddressing,
    setup: hashTableData.setupWithTheSameKey,
    fn: hashTableData.removeFn
  });
}

function contains(createTest, hashTableData) {
  return createTest({
    name: 'Hash table with open addressing #contains',
    data: hashTableData.dataOpenAddressing,
    setup: hashTableData.setup,
    fn: hashTableData.containsFn
  });
}

function clear(createTest, hashTableData) {
  return createTest({
    name: 'Hash table with open addressing #clear',
    data: hashTableData.dataOpenAddressing,
    setup: hashTableData.setup,
    fn: hashTableData.clearFn
  });
}

module.exports = (createTest) => {
  return [
    set(createTest, hashTableData),
    get(createTest, hashTableData),
    remove(createTest, hashTableData),
    contains(createTest, hashTableData),
    clear(createTest, hashTableData)
  ];
};