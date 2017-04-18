'use strict';

/* eslint no-magic-numbers: off */
/* eslint no-constant-condition: off */

const makeSort = require('./makeSort');

function selectDelimiterIndex(min, max) {
  return Math.floor((min + max) / 2);
}

function mergeArrays(array, startIndex, delimiterIndex, endIndex, compare) {
  const tempArray = [];

  function scaleTempIndex(index) {
    return index - startIndex;
  }

  let leftIndex = startIndex;
  let rightIndex = delimiterIndex + 1;
  let tempArrayIndex = leftIndex;

  while (leftIndex <= delimiterIndex && rightIndex <= endIndex) {
    if (compare(array[leftIndex], array[rightIndex]) <= 0) {
      tempArray[scaleTempIndex(tempArrayIndex)] = array[leftIndex];
      leftIndex++;
    } else {
      tempArray[scaleTempIndex(tempArrayIndex)] = array[rightIndex];
      rightIndex++;
    }

    tempArrayIndex++;
  }

  for (let i = leftIndex; i <= delimiterIndex; i++, tempArrayIndex++) {
    tempArray[scaleTempIndex(tempArrayIndex)] = array[i];
  }

  for (let i = rightIndex; i <= endIndex; i++, tempArrayIndex++) {
    tempArray[scaleTempIndex(tempArrayIndex)] = array[i];
  }

  for (let i = startIndex; i <= endIndex; i++) {
    array[i] = tempArray[scaleTempIndex(i)];
  }
}

function mergeSort(array, startIndex, endIndex, compare) {
  if (startIndex >= endIndex) {
    return;
  }

  const delimiterIndex = selectDelimiterIndex(startIndex, endIndex);

  mergeSort(array, startIndex, delimiterIndex, compare);
  mergeSort(array, delimiterIndex + 1, endIndex, compare);

  mergeArrays(array, startIndex, delimiterIndex, endIndex, compare);
}

function mergeSortMain(array, { compare }) {
  mergeSort(array, 0, array.length - 1, compare);
  return array;
}

module.exports = (array, opts) => {
  return makeSort(array, mergeSortMain, opts);
};