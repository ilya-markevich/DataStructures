'use strict';

const _ = require('lodash');

const symbols = require('../shared/symbols');
const _startLimiter = symbols._startLimiter;
const _getStartLimiter = symbols._getStartLimiter;
const _findNode = symbols._findNode;
const _findNodeBefore = symbols._findNodeBefore;
const _defaultSortFunction = symbols._defaultSortFunction;

class BaseLinkedList {
    constructor(LinkedListItem) {
        this[_startLimiter] = new LinkedListItem();
    }

    contains(value) {
        return !!this[_findNode](value);
    }

    update(oldValue, newValue) {
        const nodeToUpdate = this[_findNode](oldValue);

        if (nodeToUpdate) {
            nodeToUpdate.value = newValue;
        }

        return this;
    }

    [_findNode](value) {
        let node = this[_getStartLimiter]().next;

        while (node) {
            if (_.isEqual(node.value, value)) {
                break;
            }

            node = node.next;
        }

        return node;
    }

    [_findNodeBefore](value) {
        let node = this[_getStartLimiter]();

        while (node) {
            if (node.next && _.isEqual(value, node.next.value)) {
                break;
            }

            node = node.next;
        }

        return node;
    }

    [_getStartLimiter]() {
        return this[_startLimiter];
    }

    [_defaultSortFunction](value1, value2) {
        return value1 - value2;
    }
}

module.exports = BaseLinkedList;