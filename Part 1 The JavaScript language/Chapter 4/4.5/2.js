// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
  this.read = function () {
    this.x = Number(prompt("Введите первое число", 1));
    this.y = Number(prompt("Введите второе число", 2));
  };

  this.sum = function () {
    return this.x + this.y;
  };

  this.mul = function () {
    return this.x * this.y;
  };
}
