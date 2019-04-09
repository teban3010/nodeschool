const slice = Array.prototype.slice;

const logger = namespace => {
  //   return (...args) => {
  //     console.log(namespace, ...args);
  //   };

  return console.log.apply(console, [namespace].concat(slice.call(arguments)));
};

module.exports = logger;
