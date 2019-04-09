const arrayMap = (arr, fn) =>
  arr.reduce((acc, curr) => {
    acc.push(fn(curr));
    
    return acc;
  }, []);

module.exports = arrayMap;
