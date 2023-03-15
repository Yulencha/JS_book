// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
  let num = from;

  let timerId = setInterval(() => {
    console.log(num);
    if (num == to) {
      clearInterval(timerId);
    }
    num++;
  }, 1000);
}

function printNumbers2(from, to) {
  let num = from;
  let timerId = setTimeout(function number() {
    console.log(num);
    if (num < to) {
      timerId = setTimeout(number, 1000);
    }
    num++;
  }, 1000);
}

// printNumbers(1, 5);
printNumbers2(10, 15);
