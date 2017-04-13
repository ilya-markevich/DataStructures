'use strict';

/* eslint no-console: off */

const Benchmark = require('benchmark');
const maxTime = 3;

function onComplete() {
  const { name, hz } = this;

  console.log(`${name}: ${Math.round(hz)} executions per second.`);
}

module.exports = ({ data, setup, teardown, name, fn }) => {
  return new Benchmark({
    name,
    data,
    maxTime,
    setup,
    fn,
    teardown,
    onComplete
  });
};