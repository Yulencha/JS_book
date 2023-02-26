function getAverageAge(users) {
  let sum = users.reduce((sum, user) => sum + user.age, 0);
  return sum / users.length;
}
