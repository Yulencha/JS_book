// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
  if (Object.entries(salaries).length === 0) {
    return null;
  }
  let name = "";
  let maxSal = 0;
  for ([key, value] of Object.entries(salaries)) {
    if (value > maxSal) {
      name = key;
      maxSal = value;
    }
  }
  return name;
}
