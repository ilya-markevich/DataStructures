'use strict';

const _ = require('lodash');

const BaseLinkedList = require('../shared/base');
const LinkedListItem = require('./item');

const symbols = require('./../shared/symbols');
const _getStartLimiter = symbols._getStartLimiter;
const _endLimiter = symbols._endLimiter;
const _getEndLimiter = symbols._getEndLimiter;
const _findNode = symbols._findNode;
const _insertDefaultValues = symbols._insertDefaultValues;

class DoublyLinkedList extends BaseLinkedList {
    constructor(defaultValues) {
        super(LinkedListItem);

        let startLimiter = this[_getStartLimiter]();
        let endLimiter = new LinkedListItem(null, null, startLimiter);

        this[_endLimiter] = endLimiter;
        startLimiter.next = endLimiter;

        this[_insertDefaultValues](defaultValues);
    }

    addToTop(value) {
        const limiter = this[_getStartLimiter]();
        const top = limiter.next;
        const newNode = new LinkedListItem(value, top, limiter);

        limiter.next = newNode;
        top.prev = newNode;

        return this;
    }

    add(value) {
        let endLimiter = this[_getEndLimiter]();
        let newNode = new LinkedListItem(value, endLimiter, endLimiter.prev);

        endLimiter.prev.next = newNode;
        endLimiter.prev = newNode;

        return this;
    }

    addBefore(beforeValue, value) {
        const node = this[_findNode](beforeValue);

        if (node.next) {
            const newNode = new LinkedListItem(value, node, node.prev);
            node.prev.next = newNode;
            node.prev = newNode;
        }

        return this;
    }

    addAfter(afterValue, value) {
        const node = this[_findNode](afterValue);

        if (node.next) {
            const newNode = new LinkedListItem(value, node.next, node);
            node.next.prev = newNode;
            node.next = newNode;
        }

        return this;
    }

    remove(value) {
        const node = this[_findNode](value);

        if (node.next) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

        return this;
    }

    copyTo(linkedList) {
        let node = this[_getStartLimiter]().next;
        let currentTop = linkedList[_getStartLimiter]();

        while (node) {
            currentTop.next = new LinkedListItem(node.value, null, currentTop);
            currentTop = currentTop.next;

            node = node.next;
        }

        return linkedList;
    }

    toArray() {
        let result = [];
        let currentNode = this[_getStartLimiter]().next;

        while (currentNode.next) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return result;
    }

    clear() {
        const startLimiter = this[_getStartLimiter]();
        const endLimiter = this[_getEndLimiter]();

        startLimiter.next = endLimiter;
        endLimiter.prev = startLimiter;

        return this;
    }

    [_findNode](value) {
        let node = this[_getStartLimiter]().next;

        while (node.next) {
            if (_.isEqual(node.value, value)) {
                break;
            }

            node = node.next;
        }

        return node;
    }

    [_getEndLimiter]() {
        return this[_endLimiter];
    }

    [_insertDefaultValues](values) {
        const startLimiter = this[_getStartLimiter]();
        const endLimiter = this[_getEndLimiter]();

        const lastNode = _.reduce(values, (prevNode, value) => {
            let newNode = new LinkedListItem(value, null, prevNode);
            prevNode.next = newNode;

            return newNode;
        }, startLimiter);

        endLimiter.prev = lastNode;
        lastNode.next = endLimiter;
    }
}

module.exports = DoublyLinkedList;