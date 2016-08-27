'use strict';

const symbols = require('../shared/symbols');
const _limiter = symbols._limiter;
const _getLimiter = symbols._getLimiter;

class BaseLinkedList {
    constructor(LinkedListItem) {
        this[_limiter] = new LinkedListItem();
    }

    clear() {
        const limiter = this[_getLimiter]();
        limiter.next = null;

        return this;
    }

    toArray() {
        let result = [];
        let currentNode = this[_getLimiter]().next;

        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return result;
    }

    [_getLimiter]() {
        return this[_limiter];
    }
}

module.exports = BaseLinkedList;