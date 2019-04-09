const getDependencies = (tree, result) => {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  result = result || [];

  var dependencies = (tree && tree.dependencies) || [];

  Object.keys(dependencies).forEach(dep => {
    var key = `${dep}@${tree.dependencies[dep].version}`;

    if (result.indexOf(key) === -1) {
      result.push(key);
    }

    getDependencies(tree.dependencies[dep], result);
  });

  return result.sort();
};

module.exports = getDependencies;
