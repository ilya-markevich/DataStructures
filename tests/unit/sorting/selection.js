'use strict';

require('should');

const sort = require('../../../src/sorting/selection');
const data = require('../data/sorting');

describe('Selection sort', () => {
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