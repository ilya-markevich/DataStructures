'use strict';

require('should');

const data = require('../data/search.json');
const binarySearch = require('../../..').searches.binarySearch;

describe('Binary search', () => {
  it('should find element in integer array', (done) => {
    const array = data.integers.array;
    const searchIndex = data.integers.indexToSearch;

    const result = binarySearch(array, array[searchIndex]);

    result.should.be.eql(searchIndex);
    done();
  });

  it('should not find element in integer array', (done) => {
    const array = data.integers.array;
    const result = binarySearch(array, data.integers.notExistedValue);

    result.should.be.eql(-1);
    done();
  });

  it('should find element in object array', (done) => {
    const array = data.objects.array;
    const searchIndex = data.objects.indexToSearch;
    const result = binarySearch(array, array[searchIndex], (value1, value2) => value1.age - value2.age);

    result.should.be.eql(searchIndex);
    done();
  });

  it('should not find element in object array', (done) => {
    const array = data.objects.array;
    const result = binarySearch(array, data.objects.notExistedValue, (value1, value2) => value1.age - value2.age);

    result.should.be.eql(-1);
    done();
  });
});