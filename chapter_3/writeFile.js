const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '글이 써진다고!?')
    .then(() => {
        return fs.readFile('./writeme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });