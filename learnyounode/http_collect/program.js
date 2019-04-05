const bl = require('bl');
const http = require('http');

const url = process.argv[2];

http.get(url, response => {
    response.setEncoding('utf8');

    response.pipe(bl((err, data) => {
        if (err) {
            return console.error(err);
        }

        var strData = data.toString();
        console.log(strData.length);
        console.log(strData);
    }))

    response.on("error", err => console.error(err));
});