'use strict';

const DoublyLinkedList = require('../linked-lists/doubly/doubly');

const stackSymbols = require('./symbols');
const _content = stackSymbols._content;
const _getContent = stackSymbols._getContent;

const linkedListSymbols = require('../linked-lists/shared/symbols');
const _getEndLimiter = linkedListSymbols._getEndLimiter;

class Stack {
    constructor(defaultValues) {
        this[_content] = new DoublyLinkedList(defaultValues);
    }

    push(value) {
        this[_getContent]().add(value);
        return this;
    }

    pop() {
        const content = this[_getContent]();
        const endLimiter = content[_getEndLimiter]();
        const lastNode = endLimiter.prev;

        if (lastNode.prev) {
            lastNode.prev.next = lastNode.next;
            lastNode.next.prev = lastNode.prev;

            return lastNode.value;
        }

        return null;
    }

    sort(sortFunction) {
        this[_getContent]().sort(sortFunction);
        return this;
    }

    clear() {
        this[_getContent]().clear();
        return this;
    }

    toArray() {
        return this[_getContent]().toArray().reverse();
    }

    [_getContent]() {
        return this[_content];
    }
}

module.exports = Stack;