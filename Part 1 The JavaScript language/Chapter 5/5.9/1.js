function sumSalaries(salaries) {
  let arr = Object.values(salaries);
  let sum = 0;
  for (let salary of arr) {
    sum += salary;
  }
  return sum;
}
