'use strict';

require('should');

const generateTests = require('./testGenerator');
const interpolationSearch = require('../../../src/search/interpolation');

generateTests('Interpolation', interpolationSearch);