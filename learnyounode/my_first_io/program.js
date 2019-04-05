const fs = require('fs');

const pathToFile = process.argv[2];

const content = fs.readFileSync(pathToFile);

console.log(content.toString().split('\n').length - 1);