'use strict';

require('should');

const data = require('../data/search.json');
const interpolationSearch = require('../../../index').interpolationSearch;

describe('Interpolation search', () => {
    it('should find element in integer array', (done) => {
        const array = data.integers.array;
        const searchIndex = data.integers.indexToSearch;

        const result = interpolationSearch(array, array[searchIndex]);
        result.should.be.eql(searchIndex);

        done();
    });

    it('should not find element in integer array', (done) => {
        const array = data.integers.array;

        const result = interpolationSearch(array, data.integers.notExistedValue);
        result.should.be.eql(-1);

        done();
    });

    let objectsValueExtractor = value => value.age;
    it('should find element in object array', (done) => {
        const array = data.objects.array;
        const searchIndex = data.objects.indexToSearch;

        const result = interpolationSearch(array, array[searchIndex], {
            valueExtractor: objectsValueExtractor
        });
        result.should.be.eql(searchIndex);

        done();
    });

    it('should not find element in object array', (done) => {
        const array = data.objects.array;

        const result = interpolationSearch(array, data.objects.notExistedValue, {
            valueExtractor: objectsValueExtractor
        });
        result.should.be.eql(-1);

        done();
    });
});