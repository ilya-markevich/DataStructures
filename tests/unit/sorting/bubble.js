'use strict';

require('should');

const generateTests = require('./testGeneartor');
const sort = require('../../../src/sorting/bubble');

generateTests('Bubble', sort);