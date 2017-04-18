'use strict';

const searchData = require('../data/search');

function searchIn10(createTest, searchData) {
  return createTest({
    name: 'Linear search in 10 elements',
    data: searchData.linearData,
    setup: searchData.setup,
    fn: searchData.searchIn10Fn
  });
}

function searchIn100(createTest, searchData) {
  return createTest({
    name: 'Linear search in 100 elements',
    data: searchData.linearData,
    setup: searchData.setup,
    fn: searchData.searchIn100Fn
  });
}

function searchIn1000(createTest, searchData) {
  return createTest({
    name: 'Linear search in 1000 elements',
    data: searchData.linearData,
    setup: searchData.setup,
    fn: searchData.searchIn1000Fn
  });
}

function searchIn10000(createTest, searchData) {
  return createTest({
    name: 'Linear search in 10000 elements',
    data: searchData.linearData,
    setup: searchData.setup,
    fn: searchData.searchIn10000Fn
  });
}

function searchIn100000(createTest, searchData) {
  return createTest({
    name: 'Linear search in 100000 elements',
    data: searchData.linearData,
    setup: searchData.setup,
    fn: searchData.searchIn100000Fn
  });
}

function searchIn1000000(createTest, searchData) {
  return createTest({
    name: 'Linear search in 1000000 elements',
    data: searchData.linearData,
    setup: searchData.setup,
    fn: searchData.searchIn1000000Fn
  });
}

module.exports = (createTest) => {
  return [
    searchIn10(createTest, searchData),
    searchIn100(createTest, searchData),
    searchIn1000(createTest, searchData),
    searchIn10000(createTest, searchData),
    searchIn100000(createTest, searchData),
    searchIn1000000(createTest, searchData)
  ];
};