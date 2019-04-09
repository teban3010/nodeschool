const curryN = (fn, n) => {
  // SOLUTION GOES HERE
  n = n || fn.length;

  const curriedN = arg => {
    if (n <= 1) {
      return fn(arg);
    }

    return curryN(fn.bind(this, arg), n - 1);
  };

  return curriedN;
};

module.exports = curryN;
