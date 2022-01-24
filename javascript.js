const mergeFiles = require('./streamWrite');
const { exit, argv } = require('process');
const  tryToCatch = require("try-to-catch");
const options = {
    html: {
        removeAttributeQuotes: false,
        removeOptionalTags: false,
    },
}
const fse = require('fs-extra');
const path = require("path");
const fs = require("fs");
const outputPath = __dirname + '/sdk.js';

const inputPathList = [

    fs.createReadStream(__dirname + '/controllers/constants.js'),
    fs.createReadStream(__dirname + '/controllers/OneFlowEvent.js'),
    fs.createReadStream(__dirname + '/controllers/c.js'),
    fs.createReadStream(__dirname + '/controllers/session.js'),
    fs.createReadStream(__dirname + '/controllers/s.js'),
    fs.createReadStream(__dirname + '/controllers/f.js'),
    fs.createReadStream(__dirname + '/controllers/an.js'),
    fs.createReadStream(__dirname + '/controllers/surveySubmission.js'),
    fs.createReadStream(__dirname + '/controllers/survey.js'),
    fs.createReadStream(__dirname + '/controllers/a.js'),
    fs.createReadStream(__dirname + '/controllers/l.js'),
    fs.createReadStream(__dirname + '/controllers/event.js'),
    fs.createReadStream(__dirname + '/events.js'),
    fs.createReadStream(__dirname + '/init.js'),
];

const sdk={
    url:"https://1flow.app/js/",
    demo_token:"aHR0cHM6Ly9hcGkuMWZsb3cuYXBwL3YxLzIwMjEtMDYtMTUvc3VydmV5LXJlc3BvbnNlL2RlbW8="
}

let build = "development";
mergeFiles(inputPathList, outputPath).then((status) => {
  
    if (argv.includes('prod')) {
        build = 'production'
        fs.readFile(outputPath, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            let result = data.replace('./', 'https://dev.1flow.app/js/');
            result = data.replace('https://dev.1flow.app/js/', sdk.url);
            result = result.replace('aHR0cHM6Ly9kZXYuMWZsb3cuYXBwL2FwaS92MS8yMDIxLTA2LTE1L3N1cnZleS1yZXNwb25zZS9kZW1v', sdk.demo_token);
            fs.writeFile(outputPath, result, 'utf8', function (err) {
                if (err) return console.log(err);
                build_create();
            });
        });
    }else{
        fs.readFile(outputPath, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            let result = data.replace('./', 'https://dev.1flow.app/js/');
            fs.writeFile(outputPath, result, 'utf8', function (err) {
                if (err) return console.log(err);
                build_create();
            });
        });
    }


    
   
});


function build_create(){
    const sdk_path = argv.includes('prod') ? __dirname + '/src/production'  : __dirname + '/src/development';
    /*---------------------COPY IMG DATA ----------------*/
        const srcDir = `./img`;
        const destDir = `${sdk_path}/img`;
                                    
        // To copy a folder or file  
            fse.copy(srcDir, destDir,{overwrite:true},function (err) {
            if (err) {                 
                console.error("error:== ",err);
            } else {
                console.log("success!");
            }
            });

        import("minify").then(minify => {
                /*---------------------COPY STYLE DATA ----------------*/
            minify.minify('./style.css', options).then((data) => {
                
                let result=(argv.includes('prod')) ? data.replace('https://dev.1flow.app/js/', sdk.url) : data;
                fs.writeFile(sdk_path+"/style.css", result, 'utf8', function (err) {
                    if (err) return console.log(err);
                    exit();
                });
            });
             /*---------------------COPY JS DATA ----------------*/
            minify.minify('./sdk.js', options).then((data) => {
                fs.writeFile(sdk_path+'/1flow.js', data, 'utf8', function (err) {
                    if (err) return console.log(err);
                    exit();
                });
            }).catch((err) => {
                console.log("====NOT ABLE TO MINIFIY", err);
            });
            console.log("====Build create :- ", build);
        }).catch((err) => {
            console.log("====Build error:- ", err);
        })
}