'use strict';

require('should');

const generateTests = require('./testGenerator');
const linearSearch = require('../../../src/search/linear');

generateTests('Linear', linearSearch);