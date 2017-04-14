'use strict';

module.exports = (array, oldPosition, newPosition) => {
  const element = array[oldPosition];
  let prevElement = array[newPosition];

  for (let i = newPosition + 1; i <= oldPosition; i++) {
    const temp = array[i];

    array[i] = prevElement;
    prevElement = temp;
  }

  array[newPosition] = element;
};