'use strict';

require('should');

const Queue = require('../../src/queue');
const data = require('./data/queue.js');

function checkQueueContent(queue, expectedValues) {
  queue.toArray().should.be.eql(expectedValues);
}

describe('Queue', () => {
  describe('Initial State', () => {
    it('should create empty queue', () => {
      const queue = new Queue();

      checkQueueContent(queue, []);
    });

    it('should create queue with default values', () => {
      const { defaultValues } = data;
      const queue = new Queue(defaultValues);

      checkQueueContent(queue, defaultValues);
    });
  });

  describe('#enqueue', () => {
    it('should enqueue all values to queue', () => {
      const { valuesToAdd } = data;
      const queue = new Queue();

      valuesToAdd.forEach((value) => {
        queue.enqueue(value);
      });

      checkQueueContent(queue, valuesToAdd);
    });
  });

  describe('#dequeue', () => {
    it('should dequeue all values from queue', () => {
      const { valuesToAdd } = data;
      const queue = new Queue(valuesToAdd);

      let dequeueIndex = 0;
      let dequeueValue = queue.dequeue();

      while (dequeueValue !== undefined) {
        dequeueValue.should.be.eql(valuesToAdd[dequeueIndex]);
        dequeueValue = queue.dequeue();

        dequeueIndex++;
      }
    });
  });

  describe('#sort', () => {
    it('should sort values in queue with default sort function', () => {
      const { valuesToDefaultSorting, valuesToDefaultSortingAfterSorting } = data;
      const newQueue = new Queue(valuesToDefaultSorting);

      newQueue.sort();
      checkQueueContent(newQueue, valuesToDefaultSortingAfterSorting);
    });

    it('should sort values in queue with custom sort function', () => {
      const { customSortingFunction, valuesToCustomSorting, valuesToCustomSortingAfterSorting } = data;
      const queue = new Queue(valuesToCustomSorting);

      queue.sort(customSortingFunction);
      checkQueueContent(queue, valuesToCustomSortingAfterSorting);
    });
  });

  describe('#clear', () => {
    it('should clear queue', () => {
      const { defaultValues } = data;
      const queue = new Queue(defaultValues);

      queue.clear();
      checkQueueContent(queue, []);
    });
  });
});