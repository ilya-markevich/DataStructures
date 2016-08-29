'use strict';

require('should');
const _ = require('lodash');

const propsToCheck = [
    '_findNode',
    '_findNodeBefore',
    '_insertDefaultValues',
    '_getStartLimiter',
    '_getEndLimiter',
    '_startLimiter',
    '_endLimiter'
];

function checkLinkedListContent(linkedList, expectedValues) {
    const linkedListArray = linkedList.toArray();
    linkedListArray.should.be.eql(expectedValues);
}

module.exports = function (opts) {
    const name = _.toLower(opts.name);
    const data = opts.data;
    const LinkedListConstructor = opts.LinkedListConstructor;

    it(`should create empty ${name}`, (done) => {
        let linkedList = new LinkedListConstructor();

        (!!linkedList).should.be.eql(true);
        linkedList.should.not.have.properties(propsToCheck);

        checkLinkedListContent(linkedList, []);

        done();
    });

    it(`should create ${name} with predefined values`, (done) => {
        const defaultValues = data.defaultValues;
        let linkedList = new LinkedListConstructor(defaultValues);

        (!!linkedList).should.be.eql(true);
        linkedList.should.not.have.properties(propsToCheck);

        checkLinkedListContent(linkedList, defaultValues);

        done();
    });

    let linkedList = new LinkedListConstructor();
    it(`should add first new value to ${name}`, (done) => {
        const firstValue = data.valuesToAdd[0];

        linkedList.add(firstValue);

        const expectedResult = [firstValue];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it(`should contain first new value and not contains second new value in ${name}`, (done) => {
        const valuesToAdd = data.valuesToAdd;

        linkedList.contains(valuesToAdd[0]).should.be.eql(true);
        linkedList.contains(valuesToAdd[1]).should.be.eql(false);

        done();
    });

    it(`should add second new value to the top of ${name}`, (done) => {
        const valuesToAdd = data.valuesToAdd;
        const secondValue = valuesToAdd[1];

        linkedList.addToTop(secondValue);

        const expectedResult = [secondValue, valuesToAdd[0]];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it(`should not insert third value before null value to ${name}`, (done) => {
        const valuesToAdd = data.valuesToAdd;
        const thirdValue = valuesToAdd[2];

        linkedList.addBefore(null, thirdValue);

        const expectedResult = [valuesToAdd[1], valuesToAdd[0]];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it(`should add third new value before second value to ${name}`, (done) => {
        const valuesToAdd = data.valuesToAdd;
        const secondValue = valuesToAdd[1];
        const thirdValue = valuesToAdd[2];

        linkedList.addBefore(secondValue, thirdValue);

        const expectedResult = [thirdValue, secondValue, valuesToAdd[0]];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it(`should not insert fourth value after null value to ${name}`, (done) => {
        const valuesToAdd = data.valuesToAdd;
        const fourthValue = valuesToAdd[3];

        linkedList.addAfter(null, fourthValue);

        const expectedResult = [valuesToAdd[2], valuesToAdd[1], valuesToAdd[0]];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it(`should add fourth new value after first value to ${name}`, (done) => {
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

    it(`should copy current ${name} in new one`, (done) => {
        const valuesToAdd = data.valuesToAdd;
        const newLinkedList = new LinkedListConstructor();

        linkedList.copyTo(newLinkedList);

        const expectedResult = [valuesToAdd[1], valuesToAdd[0], valuesToAdd[3], valuesToAdd[2]];
        checkLinkedListContent(newLinkedList, expectedResult);

        done();
    });

    it(`should sort ${name} with default sort function`, (done) => {
        const valuesToSort = data.valuesToDefaultSorting;
        const linkedList = new LinkedListConstructor(valuesToSort);

        linkedList.sort();

        const expectedResult = valuesToSort.sort((value1, value2) => {
            return value1 - value2;
        });
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it(`should sort ${name} with custom sort function`, (done) => {
        const valuesToSort = data.valuesToCustomSorting;
        const linkedList = new LinkedListConstructor(valuesToSort);
        const sortFunction = (value1, value2) => {
            return value2.age - value1.age;
        };

        linkedList.sort(sortFunction);

        const expectedResult = valuesToSort.sort(sortFunction);
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });

    it(`should clear ${name}`, (done) => {
        linkedList.clear();

        const expectedResult = [];
        checkLinkedListContent(linkedList, expectedResult);

        done();
    });
};