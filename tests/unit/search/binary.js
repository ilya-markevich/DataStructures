'use strict';

require('should');

const generateTests = require('./testGenerator');
const binarySearch = require('../../../src/search/binary');

generateTests('Binary', binarySearch);