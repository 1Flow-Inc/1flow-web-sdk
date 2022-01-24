var fs = require('fs');
var multistream = require('multistream');
 
 /**
  * merge files
  *
  * @param  {Array<string>} inputPathList      input path list
  * @param  {string}        outputPath         output path
  * @return {promise}       promise
  */

 
 module.exports = function mergeFiles(inputPathList, outputPath) {
     var fd = fs.openSync(outputPath, 'w+');
     var output = fs.createWriteStream(outputPath, { start: 0, flags: 'w+'});
     return new Promise((resolve, reject) => {
         var multiStream = new multistream(inputPathList);
         multiStream.pipe(output)
         
         multiStream.on("drain" , (data) => {
             console.log('writed', data)
         })
         multiStream.on('end', () => {
             fs.closeSync(fd);
             resolve(true);
         });
         multiStream.on('error', () => {
             fs.closeSync(fd);
             reject(false);
         });
     });
 }