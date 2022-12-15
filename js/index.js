"use strict";

// 1. Напишіть функцію printNumbers(from, to, interval), яка послідовно виводить у консоль цілі числа, починаючи з from і закінчуючи to, з інтервалом між виведенням сусідніх чисел у interval мс.
// Реалізуйте перший або обидва варіанти рішення:
// - Використовуючи setInterval.

function printNumbers(from, to, interval) {
  let value = from;

  let result = setInterval(function () {
    console.log(value);
    if (value == to) {
      clearInterval(result);
    }
    value++;
  }, interval);
}

// printNumbers(-200, 55, 200);

// - *Використовуючи рекурсивний setTimeout (https://learn.javascript.ru/settimeout-setinterval#rekursivnyy-settimeout).

function printNumbers2(from, to, interval) {
  let value = from;

  setTimeout(function start() {
    console.log(value);
    if (value < to) {
      setTimeout(start, interval);
    }
    value++;
  }, interval);
}

// printNumbers2(5, 55, 1000);
