// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
  read() {
    this.x = Number(prompt("Введите первое число", 1));
    this.y = Number(prompt("Введите второе число", 2));
  },

  sum() {
    return this.x + this.y;
  },

  mul() {
    return this.x * this.y;
  },
};
