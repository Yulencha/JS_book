Function.prototype.defer = function (time) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), time);
  };
};
