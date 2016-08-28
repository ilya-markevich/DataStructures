'use strict';

const _ = require('lodash');

const symbols = require('../shared/symbols');
const _startLimiter = symbols._startLimiter;
const _getStartLimiter = symbols._getStartLimiter;
const _findNode = symbols._findNode;

class BaseLinkedList {
    constructor(LinkedListItem) {
        this[_startLimiter] = new LinkedListItem();
    }

    update(oldValue, newValue) {
        const nodeToUpdate = this[_findNode](oldValue);

        if (nodeToUpdate) {
            nodeToUpdate.value = newValue;
        }

        return this;
    }

    [_getStartLimiter]() {
        return this[_startLimiter];
    }
}

module.exports = BaseLinkedList;