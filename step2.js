const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, 'utf8', function(err,data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        else {
            console.log(`file conents: ${data}`)
        }
    })
}
//cat(process.argv[2])


async function webCat(url) {
    try {
        let response = await axios.get(url);
        console.log(response.data);
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}

const path = process.argv[2];

if (path.slice(0,4) === 'http') {
    webCat(path);
} else {
    cat(path);
}