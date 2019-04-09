const logger = namespace => {
  // return (...args) => {
  //   console.log(namespace, ...args);
  // };

  return console.log.bind(console, namespace)
};

module.exports = logger;
