'use strict';

const defaultComparator = require('./shared/defaultComparator');

module.exports = function (array, element, opts) {
    opts = opts || {};

    let result = -1;
    let comparator = opts.compareFunction || defaultComparator;

    for (let i = 0; i < array.length; i++) {
        let compareResult = comparator(array[i], element);

        if (compareResult === 0) {
            result = i;
            break;
        }

        if (opts.isSortedArray && array[i] > element) {
            break;
        }
    }

    return result;
};