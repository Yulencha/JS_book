// Fn = Fn - 1 + Fn - 2;

function fib(n) {
  let arr = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    let num = arr[i - 1] + arr[i - 2];
    arr.push(num);
  }
  return arr[n];
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
