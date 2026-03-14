"use strict";

// 1. Насадка суммирования элементов
function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  return sum;
}

// 2. Насадка разницы максимального и минимального
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = Infinity;
  let max = -Infinity;

  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  return max - min;
}

// 3. Насадка разницы сумм чётных и нечётных элементов
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }

  return sumEvenElement - sumOddElement;
}

// 4. Насадка среднего значения чётных элементов
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) {
    return 0; // нет чётных элементов
  }

  return sumEvenElement / countEvenElement;
}