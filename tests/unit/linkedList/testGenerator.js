'use strict';

require('should');

function checkLinkedListContent(linkedList, expectedValues) {
  linkedList.toArray().should.be.eql(expectedValues);
}

module.exports = ({ data, LinkedListConstructor }) => {
  describe('Initial State', () => {
    it('should create empty linked list', () => {
      const linkedList = new LinkedListConstructor();

      checkLinkedListContent(linkedList, []);
    });

    it('should create linked list with predefined values', () => {
      const { defaultValues } = data;
      const linkedList = new LinkedListConstructor(defaultValues);

      checkLinkedListContent(linkedList, defaultValues);
    });
  });

  describe('#add', () => {
    it('should add new items', () => {
      const { valuesToAdd } = data;
      const valuesToAddCount = 2;

      const values = valuesToAdd.slice(0, valuesToAddCount);
      const linkedList = new LinkedListConstructor();

      linkedList.add(values[0]).add(values[1]);
      checkLinkedListContent(linkedList, values);
    });
  });

  describe('#contains', () => {
    let linkedList;

    before(() => {
      const { valuesToAdd } = data;

      linkedList = new LinkedListConstructor();
      linkedList.add(valuesToAdd[0]);
    });

    it('should return true for first value and false for second one', () => {
      const { valuesToAdd } = data;

      linkedList.contains(valuesToAdd[0]).should.be.eql(true);
      linkedList.contains(valuesToAdd[1]).should.be.eql(false);
    });
  });

  describe('#addToTop', () => {
    let linkedList;

    before(() => {
      const { valuesToAdd } = data;

      linkedList = new LinkedListConstructor();
      linkedList.add(valuesToAdd[0]);
    });

    it('should add new value to the top of linked list', () => {
      const { valuesToAdd } = data;
      const value = valuesToAdd[1];

      linkedList.addToTop(value);
      checkLinkedListContent(linkedList, [value, valuesToAdd[0]]);
    });
  });

  describe('#addBefore', () => {
    let linkedList, addedValue;

    before(() => {
      const { valuesToAdd } = data;

      addedValue = valuesToAdd[0];

      linkedList = new LinkedListConstructor();
      linkedList.add(addedValue);
    });

    it('should not add new value before null node', () => {
      const { valuesToAdd } = data;
      const value = valuesToAdd[1];

      linkedList.addBefore(null, value);
      checkLinkedListContent(linkedList, [addedValue]);
    });

    it('should add new value before inserted value', () => {
      const { valuesToAdd } = data;
      const value = valuesToAdd[1];

      linkedList.addBefore(addedValue, value);
      checkLinkedListContent(linkedList, [value, addedValue]);
    });
  });

  describe('#addAfter', () => {
    let linkedList, addedValue;

    before(() => {
      const { valuesToAdd } = data;

      addedValue = valuesToAdd[0];

      linkedList = new LinkedListConstructor();
      linkedList.add(addedValue);
    });

    it('should not add new value after null', () => {
      const { valuesToAdd } = data;
      const value = valuesToAdd[1];

      linkedList.addAfter(null, value);
      checkLinkedListContent(linkedList, [addedValue]);
    });

    it('should add new value after inserted value', () => {
      const { valuesToAdd } = data;
      const value = valuesToAdd[1];

      linkedList.addAfter(addedValue, value);
      checkLinkedListContent(linkedList, [addedValue, value]);
    });
  });

  describe('#update', () => {
    let linkedList, addedValue;

    before(() => {
      const { valuesToAdd } = data;

      addedValue = valuesToAdd[0];

      linkedList = new LinkedListConstructor();
      linkedList.add(addedValue);
    });

    it('should not update value because old value is incorrect', () => {
      const { updatedValue } = data;

      linkedList.update(null, updatedValue);
      checkLinkedListContent(linkedList, [addedValue]);
    });

    it('should update first new value', () => {
      const { updatedValue } = data;

      linkedList.update(addedValue, updatedValue);
      checkLinkedListContent(linkedList, [updatedValue]);
    });
  });

  describe('#remove', () => {
    let linkedList, addedValue;

    before(() => {
      const { valuesToAdd } = data;

      addedValue = valuesToAdd[0];

      linkedList = new LinkedListConstructor();
      linkedList.add(addedValue);
    });

    it('should not remove value because it is incorrect', () => {
      linkedList.remove(null);
      checkLinkedListContent(linkedList, [addedValue]);
    });

    it('should remove value', () => {
      linkedList.remove(addedValue);
      checkLinkedListContent(linkedList, []);
    });
  });

  describe('#copyTo', () => {
    it('should copy linked list to another one', () => {
      const { defaultValues } = data;

      const linkedList = new LinkedListConstructor(defaultValues);
      const newLinkedList = new LinkedListConstructor();

      linkedList.copyTo(newLinkedList);
      checkLinkedListContent(newLinkedList, defaultValues);
    });
  });

  describe('#sort', () => {
    it('should sort linked list with default sort function', () => {
      const { valuesToDefaultSorting, valuesToDefaultSortingAfterSort } = data;
      const linkedList = new LinkedListConstructor(valuesToDefaultSorting);

      linkedList.sort();
      checkLinkedListContent(linkedList, valuesToDefaultSortingAfterSort);
    });

    it('should sort linked list with custom sort function', () => {
      const { valuesToCustomSorting, customSortFunction, valuesToCustomSortingAfterSort } = data;
      const linkedList = new LinkedListConstructor(valuesToCustomSorting);

      linkedList.sort(customSortFunction);
      checkLinkedListContent(linkedList, valuesToCustomSortingAfterSort);
    });
  });

  describe('#clear', () => {
    let linkedList;

    before(() => {
      const { defaultValues } = data;

      linkedList = new LinkedListConstructor(defaultValues);
    });

    it('should clear linked list', () => {
      linkedList.clear();
      checkLinkedListContent(linkedList, []);
    });
  });
};