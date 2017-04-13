'use strict';

const stackData = require('./data/stack');

function push(createTest, listData) {
  return createTest({
    name: 'Stack #push',
    data: listData.data,
    setup: listData.setup,
    fn: listData.pushFn,
    teardown: listData.teardown
  });
}

function pop(createTest, listData) {
  return createTest({
    name: 'Stack #pop',
    data: listData.data,
    setup: listData.setup,
    fn: listData.popFn,
    teardown: listData.teardown
  });
}

function sort(createTest, listData) {
  return createTest({
    name: 'Stack #sort',
    data: listData.data,
    setup: listData.setupWithArray,
    fn: listData.sortFn,
    teardown: listData.teardown
  });
}

function clear(createTest, listData) {
  return createTest({
    name: 'Stack #clear',
    data: listData.data,
    setup: listData.setup,
    fn: listData.clearFn,
    teardown: listData.teardown
  });
}

function toArray(createTest, listData) {
  return createTest({
    name: 'Stack #toArray',
    data: listData.data,
    setup: listData.setup,
    fn: listData.toArrayFn,
    teardown: listData.teardown
  });
}

module.exports = (createTest) => {
  return [
    push(createTest, stackData),
    pop(createTest, stackData),
    sort(createTest, stackData),
    clear(createTest, stackData),
    toArray(createTest, stackData)
  ];
};