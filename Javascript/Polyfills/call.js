Function.prototype.call = function (context, ...args) {
  context.fn = this;

  context.fn(...args);
};
