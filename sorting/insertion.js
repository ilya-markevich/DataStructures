'use strict';

const defaultValueExtractor = require('./shared/valueExtractor');
const compare = require('./shared/comparator');

function changeElementPosition(array, element, oldPosition, newPosition) {
    let prevElement = array[newPosition];

    for (let i = newPosition + 1; i <= oldPosition; i++) {
        let temp = array[i];
        array[i] = prevElement;
        prevElement = temp;
    }

    array[newPosition] = element;
}

module.exports = function (array, opts) {
    opts = opts || {};

    const valueExtractor = opts.valueExtractor || defaultValueExtractor;

    if (array.length === 0) {
        return [];
    }

    for (let i = 1; i < array.length; i++) {
        let element = valueExtractor(array[i]);
        let newPosition = i;

        for (let j = 0; j < i; j++) {
            let compareResult = compare(element, valueExtractor(array[j]));

            if (compareResult < 0) {
                newPosition = j;
                break;
            }
        }

        changeElementPosition(array, array[i], i, newPosition);
    }

    return array;
};