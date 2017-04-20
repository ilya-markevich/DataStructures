'use strict';

const hashTableData = require('../data/hashTable');

function set(createTest, hashTableData) {
  return createTest({
    name: 'Hash table with direct binding #set',
    data: hashTableData.dataDirectBinding,
    setup: hashTableData.setupEmpty,
    fn: hashTableData.setFn
  });
}

function get(createTest, hashTableData) {
  return createTest({
    name: 'Hash table with direct binding #get',
    data: hashTableData.dataDirectBinding,
    setup: hashTableData.setup,
    fn: hashTableData.getFn
  });
}

function remove(createTest, hashTableData) {
  return createTest({
    name: 'Hash table with direct binding #remove',
    data: hashTableData.dataDirectBinding,
    setup: hashTableData.setupWithTheSameKey,
    fn: hashTableData.removeFn
  });
}

function contains(createTest, hashTableData) {
  return createTest({
    name: 'Hash table with direct binding #contains',
    data: hashTableData.dataDirectBinding,
    setup: hashTableData.setup,
    fn: hashTableData.containsFn
  });
}

function clear(createTest, hashTableData) {
  return createTest({
    name: 'Hash table with direct binding #clear',
    data: hashTableData.dataDirectBinding,
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