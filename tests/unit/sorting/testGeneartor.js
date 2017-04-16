'use strict';

const data = require('../data/sorting');

module.exports = (sortName, sortFn) => {
  describe(`${sortName} sort`, () => {
    it('should throw error for non array sorting', () => {
      try {
        sortFn(null);
        throw new Error('Make non array sorting.');
      } catch (err) {
        err.should.have.property('message', 'First parameter should be an array.');
      }
    });

    it('should do nothing with empty array', () => {
      sortFn([]).should.be.eql([]);
    });

    it('should sort array with 1 element', () => {
      const { arrayWithOneElement } = data;

      sortFn(arrayWithOneElement).should.be.eql(arrayWithOneElement);
    });

    it('should sort array of integers', () => {
      const { integers, integersSorted } = data;

      sortFn(integers.slice(0)).should.be.eql(integersSorted);
    });

    it('should sort array of objects', () => {
      const { objects, objectsSorted, objectComparator } = data;

      sortFn(objects.slice(0), {
        compare: objectComparator
      }).should.be.eql(objectsSorted);
    });
  });
};