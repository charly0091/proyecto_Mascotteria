const fs = require('fs');
const path = require('path');

module.exports = {
    readJSON : (json) => {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, json)))
    },
    writeJSON : (json, data) => {
        fs.writeFileSync(path.resolve(__dirname, json), JSON.stringify(data, null, 2))
    }

}