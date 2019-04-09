const Spy = (target, method) => {
  const originMethod = target[method];

  const result = {
    count: 0
  };

  target[method] = () => {
    result.count++;
    originMethod.call(this, arguments);
  };

  return result;
};

module.exports = Spy;
