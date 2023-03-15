function debounce(func, time) {
  let status = false;
  return function () {
    if (status) {
      return;
    }
    func.apply(this, arguments);
    status = true;
    setTimeout(() => (status = false), time);
  };
}
