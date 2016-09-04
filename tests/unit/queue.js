'use strict';

require('should');
const _ = require('lodash');

const Queue = require('../..').Queue;
const data = _.cloneDeep(require('./data/queue.json'));

const propsToCheck = [
    '_content',
    '_getContent'
];

function checkQueueContent(queue, expectedValues) {
    const queueArray = queue.toArray();
    queueArray.should.be.eql(expectedValues);
}

describe('Queue', () => {
    it('should create empty queue', (done) => {
        const queue = new Queue();

        queue.should.not.have.properties(propsToCheck);
        checkQueueContent(queue, []);

        done();
    });

    it('should create queue with default values', (done) => {
        const values = data.defaultValues;
        const queue = new Queue(values);

        queue.should.not.have.properties(propsToCheck);
        checkQueueContent(queue, values);

        done();
    });

    const queue = new Queue();
    it('should enqueue all values to queue', (done) => {
        const values = data.valuesToAdd;

        values.forEach((value) => {
            queue.enqueue(value);
        });

        checkQueueContent(queue, values);

        done();
    });

    it('should dequeue all values from queue', (done) => {
        const values = data.valuesToAdd;

        let dequeueIndex = 0;
        let dequeueValue = queue.dequeue();

        while (dequeueValue !== null) {
            dequeueValue.should.be.eql(values[dequeueIndex]);
            dequeueValue = queue.dequeue();

            dequeueIndex++;
        }

        done();
    });

    it('should sort values in queue with default sort function', (done) => {
        const values = data.valuesToDefaultSorting;
        const newQueue = new Queue(values);

        newQueue.sort();

        const expectedResult = values.sort((value1, value2) => {
            return value1 - value2;
        });
        checkQueueContent(newQueue, expectedResult);

        done();
    });

    it('should sort values in queue with custom sort function', (done) => {
        const values = data.valuesToCustomSorting;
        const newQueue = new Queue(values);
        const sortFunction = (value1, value2) => {
            return value1.age - value2.age;
        };

        newQueue.sort(sortFunction);

        const expectedResult = values.sort(sortFunction);
        checkQueueContent(newQueue, expectedResult);

        done();
    });

    it('should clear queue', (done) => {
        const defaultValues = data.defaultValues;
        const newQueue = new Queue(defaultValues);

        newQueue.toArray().should.have.length(defaultValues.length);

        newQueue.clear();
        checkQueueContent(newQueue, []);

        done();
    });
});