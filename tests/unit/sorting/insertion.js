'use strict';

require('should');

const sort = require('../../../src/sorting/insertion');
const data = require('../data/sorting');

describe('Insertion sort', () => {
  it('should sort array of integers', () => {
    const { integers, integersSorted } = data;

    sort(integers).should.be.eql(integersSorted);
  });

  it('should sort array of objects', () => {
    const { objects, objectsSorted, objectValueExtractor } = data;

    sort(objects, {
      valueExtractor: objectValueExtractor
    }).should.be.eql(objectsSorted);
  });
});