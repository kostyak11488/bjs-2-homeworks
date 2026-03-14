"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c; // дискриминант

  if (d < 0) {
    return []; // корней нет
  }

  if (d === 0) {
    const x = -b / (2 * a);
    return [x]; // один корень
  }

  // d > 0 — два корня
  const sqrtD = Math.sqrt(d);
  const x1 = (-b + sqrtD) / (2 * a);
  const x2 = (-b - sqrtD) / (2 * a);

  return [x1, x2];
}
