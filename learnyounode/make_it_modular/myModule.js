const fs = require('fs');
const path = require('path');

module.exports = function (folder, extension, callbackFn) {

    fs.readdir(folder, (err, list) => {
        if (err) {
            return callbackFn(err);
        }

        callbackFn(null, list.filter((l) => path.extname(l) === `.${extension}`));
    });
}