'use strict';

require('should');

const data = require('../data/search.json');
const linearSearch = require('../../..').searches.linearSearch;

describe('Linear search', () => {
  it('should find element in integer array', (done) => {
    const array = data.integers.array;
    const searchIndex = data.integers.indexToSearch;
    const result = linearSearch(array, array[searchIndex]);

    result.should.be.eql(searchIndex);
    done();
  });

  it('should not find element in integer array', (done) => {
    const array = data.integers.array;
    const result = linearSearch(array, data.integers.notExistedValue);

    result.should.be.eql(-1);
    done();
  });

  it('should not find element in integer array faster because isSorted flag is passed', (done) => {
    const array = data.integers.array;
    const result = linearSearch(array, data.integers.notExistedValue, {
      isSortedArray: true
    });

    result.should.be.eql(-1);
    done();
  });

  it('should find element in object array', (done) => {
    const array = data.objects.array;
    const searchIndex = data.objects.indexToSearch;
    const result = linearSearch(array, array[searchIndex], {
      compareFunction: (value1, value2) => value1.age - value2.age
    });

    result.should.be.eql(searchIndex);
    done();
  });

  it('should not find element in object array', (done) => {
    const array = data.objects.array;
    const result = linearSearch(array, data.objects.notExistedValue, {
      compareFunction: (value1, value2) => value1.age - value2.age
    });

    result.should.be.eql(-1);
    done();
  });

  it('should not find element in integer array faster because isSorted flag is passed', (done) => {
    const array = data.objects.array;
    const result = linearSearch(array, data.objects.notExistedValue, {
      isSortedArray: true,
      compareFunction: (value1, value2) => value1.age - value2.age
    });

    result.should.be.eql(-1);
    done();
  });
});