function delay(func, time) {
  return function () {
    setTimeout(() => func.apply(this, arg), time);
  };
}
