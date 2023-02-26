// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
  return a > b ? b : a;
}
console.log(min(5, 3));
console.log(min(5, 8));
console.log(min(-5, 3));
console.log(min(0, 3));
console.log(min(5, 5));
