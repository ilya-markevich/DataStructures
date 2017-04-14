'use strict';

const queueData = require('./data/queue');

function enqueue(createTest, data) {
  return createTest({
    name: 'Queue #enqueue',
    data: data.data,
    setup: data.setup,
    fn: data.enqueueFn,
    teardown: data.teardown
  });
}

function dequeue(createTest, data) {
  return createTest({
    name: 'Queue #dequeue',
    data: data.data,
    setup: data.setup,
    fn: data.dequeueFn,
    teardown: data.teardown
  });
}

function sort(createTest, data) {
  return createTest({
    name: 'Queue #sort',
    data: data.data,
    setup: data.setupWithArray,
    fn: data.sortFn,
    teardown: data.teardown
  });
}

function clear(createTest, data) {
  return createTest({
    name: 'Queue #clear',
    data: data.data,
    setup: data.setup,
    fn: data.clearFn,
    teardown: data.teardown
  });
}

function toArray(createTest, data) {
  return createTest({
    name: 'Queue #toArray',
    data: data.data,
    setup: data.setup,
    fn: data.toArrayFn,
    teardown: data.teardown
  });
}

module.exports = (createTest) => {
  return [
    enqueue(createTest, queueData),
    dequeue(createTest, queueData),
    sort(createTest, queueData),
    clear(createTest, queueData),
    toArray(createTest, queueData)
  ];
};