const myModule = require('./myModule.js');

const folder = process.argv[2];
const extension = process.argv[3];

myModule(folder, extension, (err, list) => {
    if (err) {
        console.error(err);

        return;
    }

    list.forEach(l => console.log(l));
});