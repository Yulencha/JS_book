// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

function sumTo1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumTo2(n) {
  return n == 1 ? n : n + sumTo2(n - 1);
}

function sumTo3(n) {
  return ((n + 1) * n) / 2;
}

console.log(sumTo1(4));
console.log(sumTo2(4));
console.log(sumTo3(4));
console.log(sumTo1(5));
console.log(sumTo2(5));
console.log(sumTo3(5));
