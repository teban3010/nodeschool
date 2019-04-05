const bl = require('bl');
const http = require('http');

process.argv.splice(0, 2);

const recursiveCall = (i) => {
    if (process.argv[i]) {
        http.get(process.argv[i], response => {
            response.setEncoding('utf8');

            response.pipe(bl((err, data) => {
                if (err) {
                    return console.error(err);
                }

                console.log(data.toString());
                recursiveCall(i + 1);
            }))

            response.on("error", err => console.error(err));
        })
    }
}

recursiveCall(0);