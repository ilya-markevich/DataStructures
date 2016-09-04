'use strict';

require('should');
const _ = require('lodash');

const Stack = require('../..').Stack;
const data = _.cloneDeep(require('./data/stack.json'));

const propsToCheck = [
    '_content',
    '_getContent'
];

function checkStackContent(stack, expectedValues) {
    const stackArray = stack.toArray();
    stackArray.should.be.eql(expectedValues);
}

describe('Stack', () => {
    it('should create empty stack', (done) => {
        const stack = new Stack();

        stack.should.not.have.properties(propsToCheck);
        checkStackContent(stack, []);

        done();
    });

    it('should create stack with default values', (done) => {
        const values = _.cloneDeep(data.defaultValues);
        const stack = new Stack(values);

        stack.should.not.have.properties(propsToCheck);
        checkStackContent(stack, values.reverse());

        done();
    });

    const pushPopStack = new Stack();
    it('should push all values to stack', (done) => {
        const values = _.cloneDeep(data.valuesToAdd);

        values.forEach((value) => {
            pushPopStack.push(value);
        });

        const expectedResult = values.reverse();
        checkStackContent(pushPopStack, expectedResult);

        done();
    });

    it('should pop all values from stack', (done) => {
        const values = _.cloneDeep(data.valuesToAdd).reverse();

        let popIndex = 0;
        let popValue = pushPopStack.pop();

        while (popValue !== null) {
            popValue.should.be.eql(values[popIndex]);
            popValue = pushPopStack.pop();

            popIndex++;
        }

        done();
    });

    it('should sort values in stack with default sort function', (done) => {
        const values = data.valuesToDefaultSorting;
        const newStack = new Stack(values);

        newStack.sort();

        const expectedResult = values.sort((value1, value2) => {
            return value1 - value2;
        }).reverse();
        checkStackContent(newStack, expectedResult);

        done();
    });

    it('should sort values in stack with custom sort function', (done) => {
        const values = data.valuesToCustomSorting;
        const newStack = new Stack(values);
        const sortFunction = (value1, value2) => {
            return value1.age - value2.age;
        };

        newStack.sort(sortFunction);

        const expectedResult = values.sort(sortFunction).reverse();
        checkStackContent(newStack, expectedResult);

        done();
    });

    it('should clear stack', (done) => {
        const defaultValues = data.defaultValues;
        const newStack = new Stack(defaultValues);

        newStack.toArray().should.have.length(defaultValues.length);

        newStack.clear();
        checkStackContent(newStack, []);

        done();
    });
});