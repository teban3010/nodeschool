const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(folder, (err, list) => {
    if (err) {
        console.error(err);

        return;
    }

    list.filter((l) => path.extname(l) === extension)
        .forEach(l => console.log(l));
});