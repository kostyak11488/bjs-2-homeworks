"use strict";

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let num of arr) {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
    sum += num;
  }

  const avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}
