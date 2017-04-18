'use strict';

const data = require('../data/search');

module.exports = (name, search) => {
  describe(`${name} search`, () => {
    it('should not find element in empty array', () => {
      const { emptyArray } = data;

      search(emptyArray, 0).should.be.eql(-1);
    });

    it('should find element index in array with one element', () => {
      const { smallArray } = data;

      search(smallArray, smallArray[0]).should.be.eql(0);
    });

    it('should find element index in integers array', () => {
      const { integers, intIndexToSearch } = data;

      search(integers, integers[intIndexToSearch]).should.be.eql(intIndexToSearch);
    });

    it('should not find element index in integers array', () => {
      const { integers, notExistedIntValue } = data;

      search(integers, notExistedIntValue).should.be.eql(-1);
    });

    it('should find element index in objects array', () => {
      const { objects, objIndexToSearch, objExtractor } = data;

      search(objects, objects[objIndexToSearch], {
        extract: objExtractor
      }).should.be.eql(objIndexToSearch);
    });

    it('should not find element index in objects array', () => {
      const { objects, notExistedObjValue, objExtractor } = data;

      search(objects, notExistedObjValue, {
        extract: objExtractor
      }).should.be.eql(-1);
    });
  });
};