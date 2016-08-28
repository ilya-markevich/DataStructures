'use strict';

const _ = require('lodash');

const BaseLinkedList = require('../shared/base');
const LinkedListItem = require('./item');

const symbols = require('./../shared/symbols');
const _getStartLimiter = symbols._getStartLimiter;
const _findNode = symbols._findNode;
const _findNodeBefore = symbols._findNodeBefore;
const _insertDefaultValues = symbols._insertDefaultValues;

class SinglyLinkedList extends BaseLinkedList {
    constructor(defaultValues) {
        super(LinkedListItem);

        this[_insertDefaultValues](defaultValues);
    }

    addToTop(value) {
        const limiter = this[_getStartLimiter]();
        const top = limiter.next;

        limiter.next = new LinkedListItem(value, top);

        return this;
    }

    add(value) {
        let lastElement = this[_getStartLimiter]();

        while (lastElement.next) {
            lastElement = lastElement.next;
        }

        lastElement.next = new LinkedListItem(value);

        return this;
    }

    addBefore(beforeValue, value) {
        const beforeNode = this[_findNodeBefore](beforeValue);

        if (beforeNode) {
            const nextBeforeNode = beforeNode.next;
            beforeNode.next = new LinkedListItem(value, nextBeforeNode);
        }

        return this;
    }

    addAfter(afterValue, value) {
        const afterNode = this[_findNode](afterValue);

        if (afterNode) {
            const afterNodeNext = afterNode.next;
            afterNode.next = new LinkedListItem(value, afterNodeNext);
        }

        return this;
    }

    remove(value) {
        const beforeNodeToRemove = this[_findNodeBefore](value);

        if (beforeNodeToRemove) {
            beforeNodeToRemove.next = beforeNodeToRemove.next.next;
        }

        return this;
    }

    copyTo(linkedList) {
        let node = this[_getStartLimiter]().next;
        let currentTop = linkedList[_getStartLimiter]();

        while (node) {
            currentTop.next = new LinkedListItem(node.value);
            currentTop = currentTop.next;

            node = node.next;
        }

        return linkedList;
    }

    toArray() {
        let result = [];
        let currentNode = this[_getStartLimiter]().next;

        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return result;
    }

    clear() {
        const limiter = this[_getStartLimiter]();
        limiter.next = null;

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

    [_insertDefaultValues](values) {
        const limiter = this[_getStartLimiter]();

        _.reduce(values, (prevNode, value) => {
            const newNode = new LinkedListItem(value);
            prevNode.next = newNode;

            return newNode;
        }, limiter);
    }
}

module.exports = SinglyLinkedList;