'use strict';

require('should');
const _ = require('lodash');

const SinglyLinkedList = require('../../../linked-lists/singly/singly');

const data = require('./data/singly.json');

function checkLinkedListContent(linkedList, expectedValues) {
    const linkedListArray = linkedList.toArray();
    linkedListArray.should.be.eql(expectedValues);
}

describe('Singly Linked List', () => {
    it('should create empty linked list', (done) => {
        let linkedList = new SinglyLinkedList();

        (!!linkedList).should.be.eql(true);

        linkedList.should.not.have.properties([
            '_findNode',
            '_findNodeBefore',
            '_insertDefaultValues',
            '_getLimiter',
            'limiter'
        ]);

        checkLinkedListContent(linkedList, []);

        done();
    });

    it('should create linked list with predefined values', (done) => {
        const defaultValues = data.defaultValues;
        let linkedList = new SinglyLinkedList(defaultValues);

        (!!linkedList).should.be.eql(true);

        linkedList.should.not.have.properties([
            '_findNode',
            '_findNodeBefore',
            '_insertDefaultValues',
            '_getLimiter',
            'limiter'
        ]);

        checkLinkedListContent(linkedList, defaultValues);

        done();
    });

    let linkedList = new SinglyLinkedList();
    it('should add first new value to linkedList', (done) => {
        const firstValue = data.valuesToAdd[0];

        linkedList.add(firstValue);

        const expectedResult = [firstValue];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it('should add second new value to top of linkedList', (done) => {
        const valuesToAdd = data.valuesToAdd;
        const secondValue = valuesToAdd[1];

        linkedList.addToTop(secondValue);

        const expectedResult = [secondValue, valuesToAdd[0]];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it('should not insert third value before null value', (done) => {
        const valuesToAdd = data.valuesToAdd;
        const thirdValue = valuesToAdd[2];

        linkedList.addBefore(null, thirdValue);

        const expectedResult = [valuesToAdd[1], valuesToAdd[0]];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it('should add third new value before second value to linkedList', (done) => {
        const valuesToAdd = data.valuesToAdd;
        const secondValue = valuesToAdd[1];
        const thirdValue = valuesToAdd[2];

        linkedList.addBefore(secondValue, thirdValue);

        const expectedResult = [thirdValue, secondValue, valuesToAdd[0]];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it('should not insert fourth value after null value', (done) => {
        const valuesToAdd = data.valuesToAdd;
        const fourthValue = valuesToAdd[3];

        linkedList.addAfter(null, fourthValue);

        const expectedResult = [valuesToAdd[2], valuesToAdd[1], valuesToAdd[0]];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it('should add fourth new value after first value to linkedList', (done) => {
        const valuesToAdd = data.valuesToAdd;
        const firstValue = valuesToAdd[0];
        const fourthValue = valuesToAdd[3];

        linkedList.addAfter(firstValue, fourthValue);

        const expectedResult = [valuesToAdd[2], valuesToAdd[1], firstValue, fourthValue];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it('should not update first value because old value is incorrect', (done) => {
        const valuesToAdd = data.valuesToAdd;
        const newValue = 'updated value';

        linkedList.update(null, newValue);

        const expectedResult = [valuesToAdd[2], valuesToAdd[1], valuesToAdd[0], valuesToAdd[3]];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it('should update first new value', (done) => {
        const valuesToAdd = data.valuesToAdd;
        const firstValue = _.nth(valuesToAdd, 0);
        const newValue = 'updated value';

        linkedList.update(firstValue, newValue);

        data.valuesToAdd.splice(0, 1, newValue);

        const expectedResult = [valuesToAdd[2], valuesToAdd[1], newValue, valuesToAdd[3]];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it('should not remove third value because value is incorrect', (done) => {
        const valuesToAdd = data.valuesToAdd;

        linkedList.remove(null);

        const expectedResult = [valuesToAdd[2], valuesToAdd[1], valuesToAdd[0], valuesToAdd[3]];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it('should remove third new value', (done) => {
        const valuesToAdd = data.valuesToAdd;
        const thirdValue = data.valuesToAdd[2];

        linkedList.remove(thirdValue);

        const expectedResult = [valuesToAdd[1], valuesToAdd[0], valuesToAdd[3]];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it('should add third new value again', (done) => {
        const valuesToAdd = data.valuesToAdd;
        const thirdValue = valuesToAdd[2];

        linkedList.add(thirdValue);

        const expectedResult = [valuesToAdd[1], valuesToAdd[0], valuesToAdd[3], thirdValue];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it('should clear linkedList', (done) => {
        linkedList.clear();

        const expectedResult = [];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });
});