const duckCount = (...args) =>
  Array.prototype.slice
    .call(args)
    .filter(obj => Object.prototype.hasOwnProperty.call(obj, "quack")).length;

module.exports = duckCount;
