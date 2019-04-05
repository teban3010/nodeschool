const fs = require('fs');

var pathToFile = process.argv[2];

fs.readFile(pathToFile, (err, data) => {
    if (err) {
        console.error(err);

        return;
    }

    console.log(data.toString().split('\n').length - 1);
});