const mergeFiles = require('./streamWrite');
const { exit } = require('process');
const path = require("path");
const fs = require("fs");

const inputPathList = [
    fs.createReadStream(__dirname + '/src/production/1flow.js'),
    fs.createReadStream(__dirname + '/src/development/1flow.js'),
];

const merge = (outputPath) => {
    mergeFiles(inputPathList, outputPath).then((status) => {
        console.log(status);
        exit();
    });
}

module.exports = merge;
