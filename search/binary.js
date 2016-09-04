'use strict';

const defaultComparator = require('./shared/defaultComparator');

module.exports = function (array, element, compareFunction) {
    let comparator = compareFunction || defaultComparator;
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let result = -1;

    while (minIndex <= maxIndex) {
        let index = parseInt((maxIndex + minIndex) / 2, 10);
        let compareResult = comparator(array[index], element);

        if (compareResult === 0) {
            result = index;
            break;
        }

        if (compareResult > 0) {
            maxIndex = index - 1;
        } else {
            minIndex = index + 1;
        }
    }

    return result;
};