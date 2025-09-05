const fs = require('fs');

function helloWorld() {
    console.log("Hello World");
}

const filePath = './data/productionLines.csv';
readCSV(filePath);

function readCSV(fp) {
    const stream = fs.createReadStream(fp)
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    });
}