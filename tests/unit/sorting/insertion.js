'use strict';

require('should');

const _ = require('lodash');

const insertionSort = require('../../../').sortings.insertionSort;
const data = require('../data/sorting.json');

describe('Insertion sort', () => {
    it('should sort integers array', (done) => {
        const array = data.integers.array;

        const expectedResult = _.cloneDeep(array).sort((value1, value2) => value1 - value2);
        const sortedArray = insertionSort(_.cloneDeep(array));

        sortedArray.should.be.eql(expectedResult);

        done();
    });

    it('should sort objects array', (done) => {
        const array = data.objects.array;
        const extractor = value => value.age;

        const sortedArray = insertionSort(_.cloneDeep(array), {
            valueExtractor: extractor
        });
        const expectedResult = _.cloneDeep(array).sort((value1, value2) => extractor(value1) - extractor(value2));

        sortedArray.should.be.eql(expectedResult);

        done();
    })
});