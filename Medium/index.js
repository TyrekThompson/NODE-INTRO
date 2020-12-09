var fs = require('fs');

fs.readFile('./Planets.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})