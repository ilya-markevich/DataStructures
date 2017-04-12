'use strict';

/* eslint "no-console": off */

module.exports = {
  maxTime: 5,
  onComplete() {
    const { name, hz } = this;

    console.log(`${name}: ${Math.round(hz)} executions per second.`);
  }
};