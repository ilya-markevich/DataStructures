'use strict';

require('should');

const Stack = require('../../src/stack');
const data = require('./data/stack');

function checkStackContent(stack, expectedValues) {
  stack.toArray().should.be.eql(expectedValues);
}

describe('Stack', () => {
  describe('Initial State', () => {
    it('should create empty stack', () => {
      const stack = new Stack();

      checkStackContent(stack, []);
    });

    it('should create stack with default values', () => {
      const { defaultValues } = data;
      const stack = new Stack(defaultValues);

      checkStackContent(stack, defaultValues);
    });
  });

  describe('#push', () => {
    it('should push all values to stack', () => {
      const { valuesToAdd } = data;
      const stack = new Stack();

      valuesToAdd.forEach((value) => {
        stack.push(value);
      });

      checkStackContent(stack, valuesToAdd.reverse());
    });
  });

  describe('#pop', () => {
    it('should pop all values from stack', () => {
      const { valuesToAdd } = data;
      const stack = new Stack(valuesToAdd);

      let popIndex = 0;
      let popValue = stack.pop();

      while (popValue !== undefined) {
        popValue.should.be.eql(valuesToAdd[popIndex]);

        popValue = stack.pop();
        popIndex++;
      }
    });
  });

  describe('#sort', () => {
    it('should sort values in stack with default sort function', () => {
      const { valuesToDefaultSorting, valuesToDefaultSortingAfterSorting } = data;
      const newStack = new Stack(valuesToDefaultSorting);

      newStack.sort();
      checkStackContent(newStack, valuesToDefaultSortingAfterSorting);
    });

    it('should sort values in stack with custom sort function', () => {
      const { customSortingFunction, valuesToCustomSorting, valuesToCustomSortingAfterSorting } = data;
      const newStack = new Stack(valuesToCustomSorting);

      newStack.sort(customSortingFunction);
      checkStackContent(newStack, valuesToCustomSortingAfterSorting);
    });
  });

  describe('#clear', () => {
    it('should clear stack', () => {
      const { defaultValues } = data;
      const newStack = new Stack(defaultValues);

      newStack.clear();
      checkStackContent(newStack, []);
    });
  });
});