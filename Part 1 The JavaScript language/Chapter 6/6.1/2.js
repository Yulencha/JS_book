function factorial(n) {
  return n == 1 ? n : n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(4));
